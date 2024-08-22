import React from "react";
import ContactItem from "../ContactItem";

const ContactList = ({ contacts, onRemove, onEdit }) => {
  return (
    <div>
      {contacts.map((contact) => (
        <ContactItem
          contact={contact}
          key={contact.id}
          onRemove={onRemove}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default ContactList;
