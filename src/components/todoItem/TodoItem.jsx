import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TodoItem = ({ title, body, id, onRemove , onEdit }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {title + " " + id}
        </Typography>
        <Typography variant="body2">{body}</Typography>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            color='error'
            onClick={() => onRemove(title, body, id)}
          >
            Remove
          </Button>
          <Button
            variant="contained"
            component={Link}
            to={`/todos/${id}`}
            sx={{ mx: 1 }}
          >
            Переглянути Todo
          </Button>
          <Button
            variant="contained"
            sx={{ mx: 1 }}
            onClick={() => onEdit(title , body, id)}
          >
            Edit Todo
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};
TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onRemove: PropTypes.func,
  onEdit: PropTypes.func
};

export default TodoItem;
