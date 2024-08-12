import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TodoForm from "../TodoForm";
import TodoItem from "../TodoItem";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  const [data, setData] = useState([]);

  const handleSubmit = (todoItem) => {
    const newTodo = { ...todoItem, id: uuidv4() };
    setData([...data, newTodo]);
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
              {data.map(({ id, title, description }) => (
                <Col key={id} xs={4} className="mb-4">
                  <TodoItem
                    title={title}
                    body={description}
                    handleRemoveTodo={() => handleRemoveTodo(id)}
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
