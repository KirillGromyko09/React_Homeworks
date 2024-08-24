import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../store/slices/contacts.js";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{contact.name}</Typography>
        <Typography variant="h5">{contact.phoneNumber}</Typography>
      </CardContent>
      <CardActions>
        <Button
          type="delete"
          variant="contained"
          color="error"
          onClick={handleDelete}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          component={Link}
          to={`/contactDetails/${contact.id}`}
        >
          More Info
        </Button>
      </CardActions>
    </Card>
  );
};
ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
  }).isRequired,
};
export default ContactItem;
