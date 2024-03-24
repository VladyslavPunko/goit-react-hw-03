import "./App.css";
import { useState } from "react";
import ContactList from "./Components/ContactList/ContactList";
import SearchBox from "./Components/SearchBox/SearchBox";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState("");

  const onChangeFilter = (event) => {
    setFilter(event.target.valu);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <SearchBox />

      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
