const fs = require("fs/promises");

const path = require("path");

const contactsPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  console.log("dfdsf");
  const contacts = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(contacts);
};

// const getContactById = async (contactId) => {};

// const removeContact = async (contactId) => {};

// const addContact = async (body) => {};

// const updateContact = async (contactId, body) => {};

module.exports = {
  listContacts,
  // getContactById,
  // removeContact,
  // addContact,
  // updateContact,
};
