import React, { useEffect, useState } from "react";
import storageService from "../../utils/StorageService.js";
import { cloneDeep } from "lodash";
import { Box, Button, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import TodoItem from "../../components/todoItem/index.js";

const AllTodos = () => {
  const [todos, setTodos] = useState([]);

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
  const handleRemove = async ({ id: itemId }) => {
    const { id } = await storageService.deleteItem(itemId);
    const updatedData = todo.filter((item) => {
      return item.id !== id;
    });
    setTodo(updatedData);
  };
  return (
    <Container>
      <Grid py={5} container xs={7} item spacing={2}>
        {!!todos.length &&
          todos.map((item) => (
            <Grid key={item.id} item xs={4}>
              <TodoItem
                title={item.title}
                body={item.description}
                id={item.id}
                onRemove={handleRemove}
              />
            </Grid>
          ))}
      </Grid>
      <Box display="flex" justifyContent="center" mt={3}>
        <Button variant="contained" component={Link} to="/" sx={{ mx: 1 }}>
          Повернутися на головну сторінку
        </Button>
      </Box>
    </Container>
  );
};

export default AllTodos;
