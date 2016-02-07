var React = require("react");
var ReactDOM = require("react-dom");
var ListManager = require("./components/ListManager.jsx");


   ReactDOM.render(<ListManager title="Fruits" />, document.getElementById("fruits_container"));
   ReactDOM.render(<ListManager title="To Do" />, document.getElementById("todo_container"));
   ReactDOM.render(<ListManager title="Festival" />, document.getElementById("festival_container"));
