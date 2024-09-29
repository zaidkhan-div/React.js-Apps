import React, { useState } from 'react';
import { Input, Button, List } from 'antd';

const Todo = () => {
    let [todos, setTodos] = useState([]);
    let [inputValue, setInputValue] = useState();

    function addTodo() {
        let temparr = [...todos];
        temparr.push(inputValue);
        setTodos(temparr);
        setInputValue('');
    }
    let counter = (count) => { count + 1 };

    return (
        <div>
            <div className='form'>
                <Input
                    placeholder="Basic usage"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <Button type="primary" onClick={addTodo}>Add Todo</Button>
            </div>
            <div className="container">
                {/* <List.Item>
                    {todos.map(items => <li>{items}</li>)}
                </List.Item> */}
                <ul>
                    {todos.map((items, index) => <li key={counter}>{items}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default Todo;
