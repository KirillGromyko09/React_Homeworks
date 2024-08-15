import React from "react";
import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  Stack,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object();
const TodoForm = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    onSubmit: (values) => {
      console.log(values);
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
              value={formik.values.title}
            />
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
              value={formik.values.description}
            />
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
