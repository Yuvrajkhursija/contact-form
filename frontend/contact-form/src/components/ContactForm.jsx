import { useState } from "react";
import { createContact } from "../services/api";

function ContactForm({ onContactAdded }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      alert("All fields are required");
      return;
    }

    await createContact({ name, email, phone });

    setName("");
    setEmail("");
    setPhone("");

    onContactAdded();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;
