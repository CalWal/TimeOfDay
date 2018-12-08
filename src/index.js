import React from "react";
import ReactDOM from "react-dom";
import TimeOfDay from "/TimeOfDay.js";

function App() {
  return <TimeOfDay />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
