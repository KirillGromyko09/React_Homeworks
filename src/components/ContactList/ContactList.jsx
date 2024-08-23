import React from "react";
import ContactItem from "../ContactItem";
import PropTypes from "prop-types";

const ContactList = ({ contacts }) => {
  return (
    <div>
      {contacts.map((contact) => (
        <ContactItem contact={contact} key={contact.id} />
      ))}
    </div>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ContactList;
