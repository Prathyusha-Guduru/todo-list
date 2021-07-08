import React,{useState} from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList  from "./components/TodoList";
import Nav from "./components/Nav";
import Tweet from "./components/Tweet";
import Tweets from "./components/Tweets";

function App() {
  
  return (
    <div>
      <Nav/>
      <Tweets />
    </div>
  );   
}

export default App;
