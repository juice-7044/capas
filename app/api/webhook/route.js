import { NextResponse } from 'next/server';
import { Composio } from '@composio/core';
const composio = new Composio({
apiKey: process.env.COMPOSIO_API_KEY,
});
const CONNECTED_ACCOUNT_ID = process.env.SALESFORCE_CONNECTED_ACCOUNT_ID;
// Helper function to split full name into first/last
function splitFullName(fullName) {
if (!fullName) return { firstName: 'Unknown', lastName: 'Unknown' };
const parts = fullName.trim().split(' ');
if (parts.length === 1) {
return { firstName: parts[0], lastName: 'Unknown' };
}
return { firstName: parts[0], lastName: parts.slice(1).join(' ') };
}
export async function POST(request) {
try {
const formData = await request.json();
const referer = request.headers.get('referer') || 'Unknown';

// --- DETECT WHICH FORM WAS SUBMITTED ---
let formType = 'General Webform';
if (referer.includes('/programs')) formType = 'Programs / Classes Enrollment';
else if (referer.includes('/contact')) formType = 'Contact Page';
else if (referer.includes('/board')) formType = 'Board Application';
else if (referer.includes('/tickets')) formType = 'Legacy Tickets (Waitlist)';
else if (referer.includes('lolalouiscapas.org')) formType = 'Footer Newsletter / Main Site';

// --- EXTRACT AND MAP FIELDS ---
// Case 1: Footer form (first_name, email, address)
// Case 2: /programs (first_name, last_name, email, zip_code, who_is_this_for?, class_of_interest, anything_we_should_know?)
// Case 3: /contact (your_name, email, what’s_this_about?, your_message)
// Case 4: /board (full_name, email, area_of_interest)
// Case 5: /tickets (full_name, email, expected_party_size, anything_we_should_know?)

let firstName, lastName, email, mailingStreet, postalCode;
let extraFields = {};

// Handle name logic
if (formData.first_name) {
  firstName = formData.first_name;
  lastName = formData.last_name || 'Unknown';
} else if (formData.full_name) {
  const parsed = splitFullName(formData.full_name);
  firstName = parsed.firstName;
  lastName = parsed.lastName;
} else if (formData.your_name) {
  const parsed = splitFullName(formData.your_name);
  firstName = parsed.firstName;
  lastName = parsed.lastName;
} else {
  firstName = 'Unknown';
  lastName = 'Unknown';
}

email = formData.email || '';

// Address & Zip mapping (Salesforce standard fields)
mailingStreet = formData.address || '';
postalCode = formData.zip_code || '';

// Collect all remaining fields for the Note
const noteFields = {
  'First Name': firstName,
  'Last Name': lastName,
  'Email': email,
  'Address': mailingStreet,
  'Zip Code': postalCode,
  'Who is this for?': formData['who_is_this_for?'] || '',
  'Class of Interest': formData.class_of_interest || '',
  'Anything we should know?': formData['anything_we_should_know?'] || '',
  'What is this about?': formData['what’s_this_about?'] || '',
  'Your Message': formData.your_message || '',
  'Area of Interest': formData.area_of_interest || '',
  'Expected Party Size': formData.expected_party_size || '',
};

// Remove empty or undefined fields for cleaner note
const cleanNote = Object.entries(noteFields)
  .filter(([key, value]) => value && value !== 'Unknown')
  .map(([key, value]) => `${key}: ${value}`)
  .join('\n');

// --- STEP 1: SEARCH FOR EXISTING CONTACT BY EMAIL ---
let contactId;
let isNewContact = false;

if (email) {
  const searchResult = await composio.actions.execute({
    connectedAccountId: CONNECTED_ACCOUNT_ID,
    action: 'SALESFORCE_SEARCH_CONTACT',
    input: { searchTerm: email },
  });

  if (searchResult.data && searchResult.data.length > 0) {
    const existing = searchResult.data[0];
    contactId = existing.Id;

    // UPDATE existing contact
    await composio.actions.execute({
      connectedAccountId: CONNECTED_ACCOUNT_ID,
      action: 'SALESFORCE_UPDATE_CONTACT',
      input: {
        Id: contactId,
        FirstName: firstName,
        LastName: lastName,
        Email: email,
        MailingStreet: mailingStreet || existing.MailingStreet,
        MailingPostalCode: postalCode || existing.MailingPostalCode,
      },
    });
  } else {
    isNewContact = true;
    // CREATE new contact
    const createResult = await composio.actions.execute({
      connectedAccountId: CONNECTED_ACCOUNT_ID,
      action: 'SALESFORCE_CREATE_CONTACT',
      input: {
        FirstName: firstName,
        LastName: lastName,
        Email: email,
        MailingStreet: mailingStreet,
        MailingPostalCode: postalCode,
      },
    });
    contactId = createResult.data.id;
  }
} else {
  return NextResponse.json(
    { error: 'Email is required to create/update a contact' },
    { status: 400 }
  );
}

// --- STEP 2: ADD A DETAILED NOTE TO THE CONTACT ---
const noteTitle = `Webform: ${formType}`;
const noteBody = `
  Form Source: ${referer}
  Form Type: ${formType}
  Timestamp: ${new Date().toISOString()}
  Action: ${isNewContact ? 'New Contact Created' : 'Existing Contact Updated'}
  ----------------------------------------
  ${cleanNote}
`;

await composio.actions.execute({
  connectedAccountId: CONNECTED_ACCOUNT_ID,
  action: 'SALESFORCE_CREATE_NOTE',
  input: {
    ParentId: contactId,
    Title: noteTitle,
    Body: noteBody.trim(),
  },
});

return NextResponse.json({
  success: true,
  message: isNewContact ? 'New contact created with note' : 'Existing contact updated with note',
  contactId: contactId,
  formType: formType,
});

} catch (error) {
console.error('Salesforce webhook error:', error);
return NextResponse.json(
{ error: error.message || 'Internal Server Error' },
{ status: 500 }
);
}
}
