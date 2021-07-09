import React,{useState} from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
 
  const [inputText, setInputText] = useState(" ")
  const [todos,setTodos] = useState([])
  return (
    <div><h1>Hello React</h1>
    <Form setInputText = {setInputText} todos = {todos} setTodos = {setTodos} inputText = {inputText}/>
    <TodoList/></div>
    
  );   
}

export default App;
