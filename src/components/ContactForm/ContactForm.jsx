import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
} from "@mui/material";
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

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      onsubmit(values);
      resetForm();
    },
  });
  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <h2>Contacts</h2>
        <FormControl>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input
            id="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <FormHelperText>{formik.errors.name}</FormHelperText>
          )}
          <TextField
            id="phoneNumber"
            type="text"
            multiline
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <FormHelperText>{formik.errors.phoneNumber}</FormHelperText>
          )}
        </FormControl>
      </form>
      <Button type="submit">Submit</Button>
    </Container>
  );
};

export default ContactForm;