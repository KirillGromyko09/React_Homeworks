import React from "react";
import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  Stack,
  TextField,
  FormHelperText,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  title: Yup.string()
    .min(2, "Must be 2 characters or more")
    .max(15, "Must be 15 characters or less")
    .required("Title is required"),
  description: Yup.string()
    .min(2, "Must be 2 characters or more")
    .max(30, "Must be 15 characters or less")
    .required("Description is required"),
});
const TodoForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      onSubmit(values);
      resetForm();
    },
  });
  return (
    <Box>
      <h2>Todo Form</h2>
      <form onSubmit={formik.handleSubmit}>
        <Stack mb={4}>
          <FormControl>
            <InputLabel htmlFor="todo-title">Title</InputLabel>
            <Input
              name="title"
              type="text"
              id="todo-title"
              size="small"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
            />
            {formik.touched.title && formik.errors.title && (
              <FormHelperText>{formik.errors.title}</FormHelperText>
            )}
          </FormControl>
        </Stack>
        <Stack mb={4}>
          <FormControl>
            <TextField
              name="description"
              multiline
              label="Description"
              rows={4}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
            />
            {formik.touched.description && formik.errors.description && (
              <FormHelperText>{formik.errors.description}</FormHelperText>
            )}
          </FormControl>
        </Stack>
        <Button variant="outlined" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default TodoForm;
