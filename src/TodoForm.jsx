import { useState } from "react";

export function TodoForm({onSubmit}){
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        if(newItem === "") return

        onSubmit(newItem)

    setNewItem("")
    }

    return(
        <form onSubmit={handleSubmit} className="mainForm">
        <div className="form-row">
            <label className="top" htmlFor="item" >New Item</label>
                <input value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                    type="text" id="item"/>
        </div>
        <button className="btn">Add</button>
    </form>
    )
}