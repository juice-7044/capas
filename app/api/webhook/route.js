import { NextResponse } from 'next/server';
import { Composio } from '@composio/core';
// Initialize Composio with your API key
const composio = new Composio({
apiKey: process.env.COMPOSIO_API_KEY,
});
// The connected account ID from your Composio dashboard
const CONNECTED_ACCOUNT_ID = process.env.SALESFORCE_CONNECTED_ACCOUNT_ID;
export async function POST(request) {
try {
// Parse the incoming form data
const formData = await request.json();

// --- MAP YOUR FORM FIELDS TO SALESFORCE ---
// ⚠️ ADJUST THESE KEY NAMES to match what your form actually sends!
const {
  firstName,
  lastName,
  email,
  phone,
  formType,        // e.g., "donation", "waitlist", "partnership"
  sourceUrl,       // e.g., "lolalouiscapas.org/donate"
  donationAmount,  // optional
  message,         // optional
} = formData;

// Validate required fields
if (!email || !lastName) {
  return NextResponse.json(
    { error: 'Email and LastName are required' },
    { status: 400 }
  );
}

// --- STEP 1: SEARCH FOR EXISTING CONTACT BY EMAIL ---
const searchResult = await composio.actions.execute({
  connectedAccountId: CONNECTED_ACCOUNT_ID,
  action: 'SALESFORCE_SEARCH_CONTACT',
  input: {
    searchTerm: email, // Searches across Email, Name, etc.
  },
});

let contactId;
let isNewContact = false;

// --- STEP 2: CREATE OR UPDATE CONTACT ---
if (searchResult.data && searchResult.data.length > 0) {
  // Existing contact found → UPDATE it
  const existingContact = searchResult.data[0];
  contactId = existingContact.Id;

  await composio.actions.execute({
    connectedAccountId: CONNECTED_ACCOUNT_ID,
    action: 'SALESFORCE_UPDATE_CONTACT',
    input: {
      Id: contactId,
      FirstName: firstName || existingContact.FirstName,
      LastName: lastName || existingContact.LastName,
      Email: email,
      Phone: phone || existingContact.Phone,
      // Optionally update custom fields here
    },
  });
} else {
  // No existing contact → CREATE new one
  isNewContact = true;
  const createResult = await composio.actions.execute({
    connectedAccountId: CONNECTED_ACCOUNT_ID,
    action: 'SALESFORCE_CREATE_CONTACT',
    input: {
      FirstName: firstName || 'Unknown',
      LastName: lastName,
      Email: email,
      Phone: phone || '',
    },
  });
  contactId = createResult.data.id; // Adjust based on actual API response
}

// --- STEP 3: ADD A NOTE TO THE CONTACT ---
// Build the note content with attribution
const noteContent = `
  Form Submission: ${formType || 'General Form'}
  Source URL: ${sourceUrl || 'Unknown'}
  Donation Amount: ${donationAmount || 'N/A'}
  Message: ${message || 'No message provided'}
  Timestamp: ${new Date().toISOString()}
  Action: ${isNewContact ? 'New Contact Created' : 'Existing Contact Updated'}
`;

await composio.actions.execute({
  connectedAccountId: CONNECTED_ACCOUNT_ID,
  action: 'SALESFORCE_CREATE_NOTE',
  input: {
    ParentId: contactId,
    Title: `Webform Submission - ${formType || 'General'}`,
    Body: noteContent.trim(),
  },
});

// --- RETURN SUCCESS RESPONSE ---
return NextResponse.json({
  success: true,
  message: isNewContact ? 'New contact created with note' : 'Existing contact updated with note',
  contactId: contactId,
});

} catch (error) {
console.error('Salesforce webhook error:', error);
return NextResponse.json(
{ error: error.message || 'Internal Server Error' },
{ status: 500 }
);
}
}
