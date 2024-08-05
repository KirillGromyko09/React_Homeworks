import React from "react";
import ReactDOM from "react-dom/client";
import MarkdownEditor from "./components/MarkdownEditor.jsx";

function handleChangeContent(content) {
  console.log("Content changed");
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <MarkdownEditor onContentChange={handleChangeContent} />,
);
