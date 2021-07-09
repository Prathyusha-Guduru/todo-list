import React from "react"
import Todo from "./Todo"
const TodoList = ({todos,setTodos,filterTodos}) =>{
	console.log(todos);
	return (	
		<div className="todo-container">
			<ul className="todo-list">
				{filterTodos.map(todo=>(
					<Todo text = {todo.text} key = {todo.id} setTodos = {setTodos} todo = {todo} todos = {todos}/>
					
				))}
			</ul>
		</div>
	);
}

export default TodoList