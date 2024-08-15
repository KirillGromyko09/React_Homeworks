import { useState } from "react";
import { Container, Grid } from "@mui/material";
import Item from "./components/styled/Item.jsx";
import TodoForm from "./components/form/TodoForm";

function App() {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <TodoForm />
        </Grid>
        <Grid item xs={7}>
          <Item>xs=7</Item>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
