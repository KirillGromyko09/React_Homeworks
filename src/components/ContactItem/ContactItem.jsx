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

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact());
  };
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{contact.name}</Typography>
        <Typography variant="h5">{contact.phoneNumber}</Typography>
      </CardContent>
      <CardActions>
        <Button type="delete" color="error" onClick={handleDelete}>
          Delete
        </Button>
        <Button component={Link} to={`/contactDetails/${contact.id}`}>
          More Info
        </Button>
      </CardActions>
    </Card>
  );
};
ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
export default ContactItem;
