import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// document.addEventListener( // disable riht-click
//   "contextmenu",
//   function (e) {
//     e.preventDefault();
//   },
//   false
// );
