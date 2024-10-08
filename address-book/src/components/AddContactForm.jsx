import React, { useState } from 'react';
import Book from '../models/Book';

const AddContactForm = ({ addContact }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let errorMessage = '';

    if (!firstName) {
      errorMessage = 'The first name is required';
    } else if (!lastName) {
      errorMessage = 'The last name is required';
    } else if (!phone) {
      errorMessage = 'The phone is required';
    }

    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    const newContact = new Book(Date.now(), firstName, lastName, phone);
    addContact(newContact);
    setFirstName('');
    setLastName('');
    setPhone('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="First Name" 
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input 
        type="text" 
        placeholder="Last Name" 
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input 
        type="text" 
        placeholder="Phone" 
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Повідомлення про помилку */}
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default AddContactForm;
