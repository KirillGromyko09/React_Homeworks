import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import TodoItem from "../todoItem";

const TodoList = ({ todos, onRemove, onStatusChange }) => {
  return (
    <Grid py={5} container spacing={2}>
      {!!todos.length &&
        todos.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4}>
            <TodoItem
              title={item.title}
              description={item.description}
              id={item.id}
              status={item.status}
              onRemove={onRemove}
              onStatusChange={onStatusChange}
            />
          </Grid>
        ))}
      {!todos.length && <p className={styles.noItems}>No items to display</p>}
    </Grid>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      status: PropTypes.oneOf(["completed", "not-completed", "pending"])
        .isRequired,
    }),
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
  onStatusChange: PropTypes.func.isRequired,
};

export default TodoList;
