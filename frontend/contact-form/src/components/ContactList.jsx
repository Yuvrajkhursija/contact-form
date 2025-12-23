function ContactList({ contacts }) {
  if (contacts.length === 0) {
    return <p>No contacts found.</p>;
  }

  return (
    <ul className="list">
      {contacts.map((contact) => (
        <li key={contact._id} className="list-item">
          <strong>{contact.name}</strong>
          <span>{contact.email}</span>
          <span>{contact.phone}</span>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
