import { Route, Routes } from "react-router-dom";
import React from "react";
import routerObjects from "./routerObjects.js";

const routerConfig = () => {
  const routes = () => {
    return routerObjects.map(({ id, path, element: Element }) => {
      return <Route key={id} path={path} element={<Element />} />;
    });
  };

  return <Routes>{routes()}</Routes>;
};

export default routerConfig;
