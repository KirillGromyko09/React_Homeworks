import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

const TodoItem = ({ title, body, id, onRemove }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {title + " " + id}
        </Typography>
        <Typography variant="body2">{body}</Typography>
        <CardActions>
          <Button size="small" onClick={() => onRemove(title, body, id)}>
            Remove
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};
TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onRemove: PropTypes.func,
};

export default TodoItem;
