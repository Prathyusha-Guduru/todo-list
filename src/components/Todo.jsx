import React from 'react';

const Todo = ({text,setTodos,todo,todos}) =>{
	const deleteHandler=()=>{
		setTodos(todos.filter(el => el.id !== todo.id))
		// localStorage.setItem('todos',JSON.stringify(todos))
		
	}
	const completeHandler = () =>{
		setTodos(todos.map((item) => 
		{
			if(item.id === todo.id){
				
				return {
					...item,completed : !item.completed
				}
			}
			// localStorage.setItem('todos',JSON.stringify(todos))
			return item;
		})
		)}
	return (
		<div className={`todo ${todo.completed ? "item-complete" : " "}`}>
			<li className= {`todo-item ${todo.completed ? "completed" : " "}`} > {text}</li>
			<div className="item-buttons">
			<button  onClick = {completeHandler} className = "complete-btn">
				<i className="fas fa-check"></i>
			</button>
			
			<button  onClick = {deleteHandler} className = "trash-btn" >
				<i className="fas fa-trash"></i>
			</button>
			</div>
			
			
		</div>
	);
}

export default Todo