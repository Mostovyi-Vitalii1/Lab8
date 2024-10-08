import React, { useState } from 'react';
import AddContactForm from './components/AddContactForm';
import ContactTable from './components/ContactTable';
import Book from './models/Book';
import './App.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  
  const addContact = (contact) => {
    setContacts((prevContacts) => [...prevContacts, contact]);
  };

  const editContact = (id, updatedContact) => {
    setContacts((prevContacts) => 
      prevContacts.map(contact => contact.id === id ? updatedContact : contact)
    );
  };

  return (
    <div>
      <h1>Address Book</h1>
      <AddContactForm addContact={addContact} />
      {contacts.length === 0 ? (
        <p>No data to display</p>
      ) : (
        <ContactTable contacts={contacts} editContact={editContact} />
      )}
    </div>
  );
};

export default App;
