const BASE_URL = "http://localhost:5000/api/contacts";

export const getContacts = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const createContact = async (contact) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  });

  return res.json();
};
