import routeNames from "./routeNames.js";
import HomePage from "../pages/Home";
import ContactDetailsPage from "../pages/ContactDetails";

const routerObjects = [
  {
    id: 1,
    path: routeNames.HomePage,
    element: HomePage,
  },
  {
    id: 2,
    path: routeNames.ContactDetailsPage,
    element: ContactDetailsPage,
  },
];
export default routerObjects;
