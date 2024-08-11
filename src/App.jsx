import { useEffect, useState } from "react";
import PostCatalog from "./components/PostCatalog";
import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

const App = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const request = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await request.json();
      const filteredData = data.map(({ name, id }) => {
        return { name, id };
      });
      setUsers(filteredData);
    };
    fetchUsers();
  }, []);

  const handleClickOnListItem = async ({ id }) => {
    const request = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=" + id,
    );
    const data = await request.json();

    const styledPosts = data.map(({ title, body }) => {
      return {
        content: (
          <div>
            <h6>{title}</h6>
            <p>{body}</p>
          </div>
        ),
        title,
        body,
      };
    });

    setPosts(styledPosts);
  };
  return (
    <main className="users pt-5">
      <Container>
        <Row>
          <Col xs={4}>
            {users.length ? (
              <PostCatalog
                data={users}
                itemToShow="name"
                handleClick={handleClickOnListItem}
              />
            ) : (
              "Loading..."
            )}
          </Col>
          <Col xs={8}>
            <PostCatalog data={posts} itemToShow="content" />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default App;
