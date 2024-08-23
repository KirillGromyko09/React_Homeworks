import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../store/slices/contacts.js";
import { Container, Grid } from "@mui/material";
import ContactForm from "../../components/ContactForm";
import ContactList from "../../components/ContactList";

const HomePage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);

  const handleAddContact = (values) => {
    dispatch(addContact(values));
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ContactForm
            initialValues={{ name: "", phoneNumber: "" }}
            onSubmit={handleAddContact}
          />
        </Grid>
        <Grid item xs={12}>
          <ContactList contacts={contacts} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
