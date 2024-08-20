import routeNames from "./routeNames.js";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import AllTodos from "../pages/AllTodos";
import SingleTodo from "../pages/Todo";

const routerObjects = [
  {
    id: 0,
    path: routeNames.notFound,
    element: NotFound,
  },
  {
    id: 1,
    path: routeNames.home,
    element: Home,
  },
  {
    id: 2,
    path: routeNames.allTodos,
    element: AllTodos,
  },
  {
    id: 3,
    path: routeNames.singleTodo,
    element: SingleTodo,
  },
];
export default routerObjects;
