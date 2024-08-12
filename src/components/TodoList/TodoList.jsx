import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TodoForm from "../TodoForm";
import TodoItem from "../TodoItem";

const TodoList = () => {
  const [data, setData] = useState([]);

  const handleSubmit = (todoItem) => {
    setData([...data, todoItem]);
  };

  const handleRemoveTodo = (id) => {
    const updatedData = data.filter((todo) => todo.id !== id);
    setData(updatedData);
  };

  return (
    <div className="todo-list">
      <div className="text-center">
        <h1>Todo List</h1>
      </div>
      <Container>
        <Row>
          <Col xs={6}>
            <TodoForm onSubmit={handleSubmit} />
          </Col>
          <Col xs={6}>
            <Row>
              {data.map(({ title, description }, index) => (
                <Col
                  key={title + "_" + index}
                  data-id={title + "_" + index}
                  xs={4}
                  className="mb-4"
                >
                  <TodoItem
                    title={title}
                    body={description}
                    handleRemoveTodo={() => handleRemoveTodo()}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TodoList;
