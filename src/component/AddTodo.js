
import React, { useState } from 'react';
import { log } from '../config';

const AddTodo = (props) => {

    const [todo, setTodo] = useState('');

    const submitHandler = (ev) => {
        ev.preventDefault();
        props.add({id: Date.now(), todo});
        setTodo('');
    }

    const changeHandler = ({ target: { name, value } }) => {
        log(name, value)
        setTodo(value);
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" name="todo" value={todo} onChange={changeHandler} />
            <input type="submit" value="Add Todo" />
        </form>
    )
}

export default AddTodo;