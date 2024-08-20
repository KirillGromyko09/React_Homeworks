import React, { useEffect, useState } from "react";
import storageService from "./../../utils/StorageService.js";
import { Link, useParams } from "react-router-dom";
import { Box, Button } from "@mui/material";
import TodoForm from "../../components/form/TodoForm/index.js";

const SingleTodo = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    const todos = getData();
    const currentTodo = todos.find((item) => item.id === id);
    setTodo(currentTodo);
  }, [id]);
  const handleEditTodo = (updatedTodo) => {
    const todos = getData();
    const newTodos = todos.map((item) => (item.id === id ? updatedTodo : item));
    saveItem(newTodos);
    saveItem(updatedTodo);
    alert("Todo item updated successfully");
  };
  const handleRemove = async ({ id: itemId }) => {
    const { id } = await storageService.deleteItem(itemId);
    const updatedData = todo.filter((item) => {
      return item.id !== id;
    });
    setTodo(updatedData);
  };
  return (
    <Box p={2} m={2} bgcolor="#f9f9f9" borderRadius={2}>
      <h1>Todo Item</h1>
      <TodoForm onSubmit={handleEditTodo} initialValues={todo} />
      <Box display="flex" justifyContent="space-between" mt={2}>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleRemove}
          sx={{ mr: 2 }}
        >
          Delete
        </Button>
        <Button variant="contained" component={Link} to={`/todo/${todo.id}`}>
          View
        </Button>
        <Button variant="contained" component={Link} to="/">
          Повернутися на головну сторінку
        </Button>
      </Box>
    </Box>
  );
};

export default SingleTodo;
