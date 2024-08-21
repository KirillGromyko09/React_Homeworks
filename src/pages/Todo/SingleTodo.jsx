import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Button } from "@mui/material";
import TodoForm from "../../components/form/TodoForm/index.js";
import storageService, { StorageService } from "../../utils/StorageService.js";

const SingleTodo = () =>  {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const todos = await storageService.getData();

        if (!Array.isArray(todos)) {
          console.error("todos is not an array:", todos);
          return;
        }

        const currentTodo = todos.find((item) => item.id === id);
        setTodo(currentTodo);
      } catch (error) {
        console.error("Error fetching todo:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleEditTodo = async (updatedTodo) => {
    try {
      const todos = await storageService.getData();
      const newTodos = todos.map((item) => (item.id === id ? updatedTodo : item));

      await storageService.saveItem(newTodos);
      alert("Todo item updated successfully");
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const handleRemove = async () => {
    try {
      await storageService.deleteItem(id);
      const todos = await storageService.getData();
      const updatedData = todos.filter((item) => item.id !== id);
      setTodo(null);
      alert("Todo item deleted successfully");
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  if (!todo) {
    return (
      <Box p={2} m={2} bgcolor="#f9f9f9" borderRadius={2}>
        <p>Todo item not found or has been deleted.</p>
        <Button variant="contained" component={Link} to="/">
          Return to Home Page
        </Button>
      </Box>
    );
  }

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
