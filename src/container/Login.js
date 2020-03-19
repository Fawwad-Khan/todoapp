import React, { Fragment } from 'react';
import { TodoAction, connect } from '../store';
import { AddTodo } from '../component';


class Login extends React.Component {

    addTodo = (todo) => {
        this.props.add_todo(null, null, todo, null, null);
    }

    renderTodos = () => {
        const { todos } = this.props;
        if (todos.length > 0) {
            return todos.map(t => (
                <li key={t.id}>{t.todo}</li>
            ));
        } else {
            return (<p>No Todos Found !!</p>);
        }
    }


    render() {

        // eslint-disable-next-line
        // const { children, ...attributes } = this.props;

        return (
            <Fragment>
                <h1>Login Page</h1>
                <hr />
                <h3>Todo Sample using Functional Component</h3>
                <AddTodo add={this.addTodo} />
                <ul>
                    {this.renderTodos()}
                </ul>
            </Fragment>
        );
    }
}


const mapStateToProps = ({ todo }) => ({
    todos: todo.todos,
});

const mapDispatchToProps = (dispatch) => ({
    add_todo: (...payload) => dispatch(TodoAction.add_todo(...payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
