import React, { Fragment, useEffect, useState } from 'react';
import { TodoAction, useSelector, shallowEqual, useDispatch } from '../store/index';
import { AddTodo } from '../component';
import { log } from '../config';

const Register = () => {

    const Dispatch = useDispatch();

    const { todos } = useSelector(({ todo }) => ({
        todos: todo.todos
    }), shallowEqual);

    useEffect(() => {
        log('todos from Store', todos);
    }, [todos]);

    const renderTodos = () => {
        if (todos.length > 0) {
            return todos.map(t => (
                <li key={t.id}>{t.todo}</li>
            ));
        } else {
            return (<p>No Todos Found !!</p>);
        }
    }

    const addTodo = (todo) => {
        Dispatch(TodoAction.add_todo(null, null, todo, null, null));
    }

    return (
        <Fragment>
            <h1>Register !!!</h1>
            <hr />
            <h3>Todo Sample using Functional Component</h3>
            <AddTodo add={addTodo}/>
            <ul>
                {renderTodos()}
            </ul>
        </Fragment>
    )
}

export default Register;