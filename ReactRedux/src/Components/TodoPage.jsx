import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo, editTodo, startEditing } from '../Features/todosSlice'

const TodoPage = () => {
    const [inputValue, setInputValue] = useState("")
    const dispatch = useDispatch()
    const todo = useSelector((state) => state.todos.todos)
    const editIndex = useSelector((state) => state.todos.editIndex)
    console.log(editIndex, " EditIndex");

    console.log(todo, " Todo");

    const handleChange = () => {
        if (inputValue.trim()) {
            if (editIndex) {
                dispatch(editTodo(inputValue))
            }
            else {
                dispatch(addTodo(inputValue))
            }
            setInputValue('')
        }
    }

    const handleEdit = (todo) => {
        setInputValue(todo.text)
        dispatch(startEditing(todo.id)) // action.payload we send here
    }

    return (
        <div style={{ border: "1px solid black", width: "650px", margin: "auto", marginTop: "50px", padding: "20px", display: "flex", flexDirection: "column", alignContent: "center", justifyContent: "space-around", gap: "10px" }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "10px" }}>

                <input type="text" placeholder='Enter Todo' style={{ padding: "10px" }} value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} />
                <button onClick={handleChange}>{editIndex !== null ? "Update" : "Submit"}</button>

            </div>
            <div>
                <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {todo.map((item, index) => (
                        <div key={index} style={{ display: "flex", gap: "10px" }}>  {/* ✅ Key here */}
                            <li >{item.text}</li>
                            <button onClick={() => dispatch(deleteTodo(item))}>Delete</button>
                            <button onClick={() => handleEdit(item)}>EditTodo</button>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoPage