import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let posts = [
  { id: 1, message: "Hey, i am noodles", likeCount: "10" },
  { id: 2, message: "Helloy, it lessons", likeCount: "15" },
  { id: 3, message: "Yo", likeCount: "11" },
  { id: 4, message: "Something", likeCount: "5" }
];

let dialogs = [
  { id: 1, name: "Mihail" },
  { id: 2, name: "Sveta" },
  { id: 3, name: "Kukis" },
  { id: 4, name: "Charger" }
];

let message = [
  { id: 1, message: "Hi" },
  { id: 2, message: "Ho are you" },
  { id: 3, message: "Hello" }
];

ReactDOM.render(
  <App posts={posts} dialogs={dialogs} message = {message} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
