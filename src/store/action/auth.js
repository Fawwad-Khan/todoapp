import BaseAction from './BaseAction';

const Entity = 'AUTH';
const Action = new BaseAction(Entity);

Action.LOGIN = Action._action('LOGIN');
Action.login = (params, query, body) => ({ 
    type: Action.LOGIN, 
    payload: Action._payload(params, query, body, 'post', 'login') 
});

Action.RESGITER = Action._action('RESGITER');
Action.resgiter = (params, query, body) => ({ 
    type: Action.RESGITER, 
    payload: Action._payload(params, query, body, 'post', 'resgiter') 
});

Action.PROFILE = Action._action('PROFILE');
Action.profile = (params, query, body) => ({ 
    type: Action.PROFILE, 
    payload: Action._payload(params, query, body, 'get', 'profile') 
});


export default Action;