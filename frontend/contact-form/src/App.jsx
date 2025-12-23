import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { getContacts } from "./services/api";

function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const data = await getContacts();
    setContacts(data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="container">
      <h1>📇 Contact Manager</h1>

      <ContactForm onContactAdded={fetchContacts} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
