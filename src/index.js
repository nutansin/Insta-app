import React from "react";
import ReactDOM from "react-dom";
import Header from "./header.jsx";
import './css/header.css';


const Index = () => {
  return <div>Hello React 11!</div>;
};

ReactDOM.render(<Header />, document.getElementById("root"));