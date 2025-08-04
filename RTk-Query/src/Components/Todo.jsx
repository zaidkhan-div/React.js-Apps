import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useGetPostsQuery, useNewPostMutation } from '../Features/ApiSlice';
import { setTodo, addTodo, deleteTodo } from '../Features/TodoSlice';

const Todo = () => {
    const [inputVal, setInputVal] = useState("");
    const { data } = useGetPostsQuery();
    const [newPost] = useNewPostMutation();
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todo.todos);
    console.log(todos, "SliceTodo");

    const handleTodo = async () => {
        if (!inputVal.trim()) return;

        try {
            await newPost({ text: inputVal }); // ✅ Send to API
            setInputVal(""); // ✅ Clear input
            // No need to dispatch(addTodo), because useEffect + setTodo(data) will sync Redux
        } catch (error) {
            console.error("Failed to add todo:", error);
        }
    };

    useEffect(() => {
        dispatch(setTodo(data));
    }, [data]);

    return (
        <div style={{ width: "650px", height: "auto", margin: "auto", border: "1px solid red", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ display: "flex", }}>
                <input type="text" placeholder='Enter Todo' value={inputVal} onChange={(e) => setInputVal(e.target.value)} style={{ padding: "10px", flex: 2 }} />
                <button onClick={handleTodo}>Add Todo</button>
            </div>
            <div style={{ width: "100%", border: "1px solid blue" }}>
                {
                    data?.map((item, index) => (
                        <ul key={index}>
                            <li>{item.text}</li>
                        </ul>
                    ))
                }
            </div>
        </div>
    )
}

export default Todo
