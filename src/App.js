import React,{useState,useEffect} from "react";
import "./App.css";
import "./css/styles.min.css";
import todoImage from "./todo-image.png"
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  
  const [inputText, setInputText] = useState(" ")
  const [todos,setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filterTodos,setFilterTodos] = useState([])
  // localStorage.setItem('todos',JSON.stringify(todos))
  // if (localStorage.getItem('todos') !== null) {
  //   todos += JSON.parse(localStorage.getItem('todos'));
  // }
  

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
    <div className = "container">
      <div className="content-wrapper">
      <Form setInputText = {setInputText} todos = {todos} setTodos = {setTodos} inputText = {inputText} status = {status} setStatus = {setStatus} />
      <TodoList todos = {todos} setTodos = {setTodos} filterTodos = {filterTodos}/>
      </div>
      <div className="image-wrapper">
        <img className = "todo-image" src={todoImage} alt="image" />
      </div>
    
    </div>
    
  );   
}

export default App;
