import React, { Component } from "react";
import styles from "./postCatalog.module.scss";
import { ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
const PostCatalog = ({ data, itemToShow: key, handleClick }) => {
  return (
    <ListGroup>
      {data.map((item) => {
        return (
          <ListGroup.Item key={uuidv4()} onClick={() => handleClick(item)}>
            {item[key]}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};
PostCatalog.propTypes = {
  data: PropTypes.array.isRequired,
  itemToShow: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default PostCatalog;
