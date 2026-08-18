import { NextResponse } from 'next/server';
import { Composio } from '@composio/core';
const composio = new Composio({
apiKey: process.env.COMPOSIO_API_KEY,
});
const CONNECTED_ACCOUNT_ID = process.env.SALESFORCE_CONNECTED_ACCOUNT_ID;
// Helper function to split full name
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
// --- HANDLE BOTH JSON AND FORM DATA ---
const contentType = request.headers.get('content-type') || '';
let formData = {};

if (contentType.includes('application/json')) {
  formData = await request.json();
} else if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
  const rawData = await request.formData();
  formData = Object.fromEntries(rawData.entries());
} else {
  // Fallback: try to parse as JSON anyway
  try {
    formData = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'Unsupported content type. Use JSON or form data.' },
      { status: 400 }
    );
  }
}

// --- REST OF YOUR CODE (unchanged from the previous version) ---
const referer = request.headers.get('referer') || 'Unknown';

let formType = 'General Webform';
if (referer.includes('/programs')) formType = 'Programs / Classes Enrollment';
else if (referer.includes('/contact')) formType = 'Contact Page';
else if (referer.includes('/board')) formType = 'Board Application';
else if (referer.includes('/tickets')) formType = 'Legacy Tickets (Waitlist)';
else if (referer.includes('lolalouiscapas.org')) formType = 'Footer Newsletter / Main Site';

let firstName, lastName, email, mailingStreet, postalCode;

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
mailingStreet = formData.address || '';
postalCode = formData.zip_code || '';

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

const cleanNote = Object.entries(noteFields)
  .filter(([key, value]) => value && value !== 'Unknown')
  .map(([key, value]) => `${key}: ${value}`)
  .join('\n');

if (!email) {
  return NextResponse.json(
    { error: 'Email is required to create/update a contact' },
    { status: 400 }
  );
}

let contactId;
let isNewContact = false;

// --- COMPOSIO ACTIONS (FIX: Check exact action names!) ---
// ⚠️ IMPORTANT: The action names below must match EXACTLY what Composio calls them.
// Go to Composio dashboard > Apps > Salesforce > Actions to verify.
const SEARCH_ACTION = 'SALESFORCE_SEARCH_CONTACT';
const CREATE_ACTION = 'SALESFORCE_CREATE_CONTACT';
const UPDATE_ACTION = 'SALESFORCE_UPDATE_CONTACT';
const NOTE_ACTION = 'SALESFORCE_CREATE_NOTE';

const searchResult = await composio.actions.execute({
  connectedAccountId: CONNECTED_ACCOUNT_ID,
  action: SEARCH_ACTION,
  input: { searchTerm: email },
});

if (searchResult.data && searchResult.data.length > 0) {
  const existing = searchResult.data[0];
  contactId = existing.Id;
  isNewContact = false;

  await composio.actions.execute({
    connectedAccountId: CONNECTED_ACCOUNT_ID,
    action: UPDATE_ACTION,
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
  const createResult = await composio.actions.execute({
    connectedAccountId: CONNECTED_ACCOUNT_ID,
    action: CREATE_ACTION,
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
  action: NOTE_ACTION,
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
