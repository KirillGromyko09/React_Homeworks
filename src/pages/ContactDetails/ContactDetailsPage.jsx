import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateContact } from "../../store/slices/contacts.js";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Container,
  TextField,
  Grid,
  FormHelperText,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Must be at least 2 characters")
    .max(15, "Must be 15 characters of less")
    .required("Name is required"),
  phoneNumber: Yup.string()
    .min(8, "Must be at least 8 characters")
    .max(15, "Must be 15 characters or less")
    .required("Phone number is required"),
});
const ContactDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);

  const contact = contacts.find((contact) => contact.id === id);

  if (!contact) {
    return <div>Contact not found</div>;
  }

  // Инициализация Formik
  const formik = useFormik({
    initialValues: {
      name: contact.name,
      phoneNumber: contact.phoneNumber,
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(updateContact({ ...contact, ...values }));
      navigate("/");
    },
  });

  return (
    <Container>
      <Card>
        <form onSubmit={formik.handleSubmit}>
          <CardContent>
            <Typography variant="h5">Edit Contact</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="name"
                  label="Name"
                  variant="outlined"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name && (
                  <FormHelperText>{formik.errors.name}</FormHelperText>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  variant="outlined"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNumber}
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                  <FormHelperText>{formik.errors.phoneNumber}</FormHelperText>
                )}
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
            <Button component={Link} to="/" variant="outlined">
              Cancel
            </Button>
          </CardActions>
        </form>
      </Card>
    </Container>
  );
};

export default ContactDetailsPage;
