import React from "react";
import HomePage from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import ContactDetails from "./pages/ContactDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contactDetails/:id" element={<ContactDetails />} />
    </Routes>
  );
}

export default App;
