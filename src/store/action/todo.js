
import BaseAction from './BaseAction';

const Entity = 'TODO';
const Action = new BaseAction(Entity);

Action.ADD_TODO = Action._action('ADD_TODO');
Action.add_todo = (params, query, body) => ({ 
    type: Action.ADD_TODO, 
    payload: Action._payload(null, null, body, null, null) 
});

Action.DELETE_TODO = Action._action('DELETE_TODO');
Action.delete_todo = (params, query, body) => ({ 
    type: Action.DELETE_TODO, 
    payload: Action._payload(null, null, body, null, null) 
});

export default Action;