import { useEffect, useState } from "react";
import { ActualList } from "./ActualList";
import { TodoForm } from "./TodoForm";

import "./style.css";

export default function App() {

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const calculateInputHeight = (value) => {
    const lineHeight = 20; // Adjust as needed
    return value.split('\n').length * lineHeight;
  };

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  },[todos])

  function addTodo(title){

    setTodos((currentTodos) => {
    return [
    ...currentTodos,
    { id:crypto.randomUUID(), title, completed:false
    },
    ]
})
}

  function toggleTodo(id, completed){
    setTodos(currentTodos =>{
      return currentTodos.map(todo=>
        {
          if(todo.id==id){
            return {...todo,completed}
          }
          return todo
        })
    })
  }
  function deleteTodo(id){
    setTodos(currentTodos=> {
      return currentTodos.filter(todo => todo.id !== id)
    })

  }

  return(
  <>
  <TodoForm onSubmit={addTodo} handleInputChange={handleInputChange} calculateInputHeight={calculateInputHeight}/>
  <h1 className="headTitle">Current :</h1>
  <ActualList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  </>
  )
}