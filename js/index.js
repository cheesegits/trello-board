require("babel-polyfill");

import React from "react";
import ReactDOM from "react-dom";

import TrelloBoard from "./components/board";

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<TrelloBoard />, document.getElementById("app"));
});
