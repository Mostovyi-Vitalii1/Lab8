import React, { useState } from 'react';

const ContactTable = ({ contacts, editContact }) => {
  const [editingId, setEditingId] = useState(null);
  const [editedContact, setEditedContact] = useState({});

  const handleEdit = (id) => {
    const contact = contacts.find(contact => contact.id === id);
    setEditedContact(contact);
    setEditingId(id);
  };

  const handleSave = (id) => {
    
    if (!editedContact.firstName || !editedContact.lastName || !editedContact.phone) {
      return; 
    }
    editContact(id, editedContact);
    setEditingId(null);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map(contact => (
          <tr key={contact.id}>
            <td>{contact.id}</td>
            <td>
              {editingId === contact.id ? (
                <input 
                  type="text" 
                  value={editedContact.firstName} 
                  onChange={(e) => setEditedContact({ ...editedContact, firstName: e.target.value })}
                  style={{ borderColor: !editedContact.firstName ? 'red' : 'initial' }} 
                />
              ) : (
                contact.firstName
              )}
            </td>
            <td>
              {editingId === contact.id ? (
                <input 
                  type="text" 
                  value={editedContact.lastName} 
                  onChange={(e) => setEditedContact({ ...editedContact, lastName: e.target.value })}
                  style={{ borderColor: !editedContact.lastName ? 'red' : 'initial' }} 
                />
              ) : (
                contact.lastName
              )}
            </td>
            <td>
              {editingId === contact.id ? (
                <input 
                  type="text" 
                  value={editedContact.phone} 
                  onChange={(e) => setEditedContact({ ...editedContact, phone: e.target.value })}
                  style={{ borderColor: !editedContact.phone ? 'red' : 'initial' }} 
                />
              ) : (
                contact.phone
              )}
            </td>
            <td>
              {editingId === contact.id ? (
                <button onClick={() => handleSave(contact.id)}>Save</button>
              ) : (
                <button onClick={() => handleEdit(contact.id)}>Edit</button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;
