import React,{useState,useEffect} from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  
  const [inputText, setInputText] = useState(" ")
  const [todos,setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filterTodos,setFilterTodos] = useState([])


  useEffect(()=>{
    filterHandler();
  },[todos])

  const filterHandler = (e) =>{
    switch(status){
      case 'completed':
        setFilterTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilterTodos(todos)
    }
  }
  return (
    <div><h1>Hello React</h1>
    <Form setInputText = {setInputText} todos = {todos} setTodos = {setTodos} inputText = {inputText} status = {status} setStatus = {setStatus} />
    <TodoList todos = {todos} setTodos = {setTodos} filterTodos = {filterTodos}/></div>
    
  );   
}

export default App;
