export function ListItems({completed, id, title, toggleTodo, deleteTodo}){
    return(
        <li>
        <label>
        <input type="checkbox" id="checkBox" checked={completed}
        onChange={e => toggleTodo(id, e.target.checked)}
        />
        {title}
        </label>
        <button onClick={()=> deleteTodo(id)} className="del-btn">Delete</button>
    </li>
    )
}



