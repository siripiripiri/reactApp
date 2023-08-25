import { useState } from "react";
import AutoGrowingInput from "./AutoGrowingInput";

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
                    type="text" id="item" placeholder="Type here!"/>
        </div>
        <button className="btn">Add</button>
    </form>
    )
}