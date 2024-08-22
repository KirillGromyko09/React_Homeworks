import React from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../store/slices/contacts.js";
import { Container, Grid } from "@mui/material";
import ContactForm from "../../components/ContactForm";
import ContactList from "../../components/ContactList";

const HomePage = () => {
  const dispatch = useDispatch();

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
          <ContactList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
