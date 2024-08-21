import React, { useEffect, useState } from "react";
import storageService, { StorageService } from "../../utils/StorageService.js";
import { cloneDeep } from "lodash";
import { Box, Button, Container, Grid } from "@mui/material";
import TodoForm from "../../components/form/TodoForm/index.js";
import TodoItem from "../../components/todoItem/index.js";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const saveTodo = async (data) => {
    try {
      const savedData = await storageService.saveItem(data);
      const todosCopy = cloneDeep(todos);
      todosCopy.push(savedData);
      setTodos(todosCopy);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemove = async ({ id: itemId }) => {
    const { id } = await storageService.deleteItem(itemId);
    const updatedData = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(updatedData);
  };
  const handleEditTodo = async (id, updatedTodo) => {
    try {
      const todosCopy = cloneDeep(todos);
      const index = todosCopy.findIndex((item) => item.id === id);
      if (index !== -1) {
        todosCopy[index] = { ...todosCopy[index], ...updatedTodo };
        await storageService.saveItem(todosCopy);
        setTodos(todosCopy);
      }
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await storageService.getData();
        setTodos(data);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <TodoForm onSubmit={saveTodo} />
        </Grid>
        <Grid py={5} container xs={7} item spacing={2}>
          {!!todos.length &&
            todos.map((item) => (
              <Grid key={item.id} item xs={12}>
                <TodoItem
                  title={item.title || "No Title"}
                  body={item.description || "No Description"}
                  id={item.id}
                  onRemove={handleRemove}
                  onEdit={handleEditTodo}
                />
              </Grid>
            ))}
        </Grid>
        <Box display="flex" justifyContent="center">
          <Button
            variant="contained"
            component={Link}
            to="/todos"
            sx={{ mx: 1 }}
          >
            Переглянути всі Todo
          </Button>
        </Box>
      </Grid>
    </Container>
  );
};
export default Home;
