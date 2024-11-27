import React from "react";
import Login from "./Login.jsx";

var isLoggedIn = false;

function renderConditionally() {
  if (isLoggedIn === true) {
    return <h1> Hello </h1>;
  } else {
    return <Login />;
  }
}

function App() {
  return <div className="container">{isLoggedIn? <h1> Hello </h1> : <Login /> }</div>;
}

export default App;
