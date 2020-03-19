
import BaseAction from './BaseAction';
import { config } from '../../config';

const Entity = 'GITHUB';
const Action = new BaseAction(Entity);

Action.GET_USER_INFO = Action._action('GET_USER_INFO');
Action.getUserInfo = (params, query, body) => ({
    type: Action.GET_USER_INFO,
    payload: Action._payload(params, query, body, "get", "getUserInfo", config.githubAPI)
});

export default Action;