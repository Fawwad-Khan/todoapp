import { TodoAction, successActionOf, failureActionOf } from '../action/index';
// import { log } from '../../config/index';

const initState = {
    todos: [{ id: 1, todo: 'Hello World!' }],
};

function Reducer(state = initState, action) {
    const { body } = action.payload || {};
    const todos = [...state.todos];

    switch (action.type) {

        case TodoAction.ADD_TODO:
            todos.push(body);
            return { ...state, todos };

        case TodoAction.DELETE_TODO:
            todos = todos.filter(i => i.id !== body.id);
            return { ...state, todos };

        default:
            return state
    }
}

export default Reducer;