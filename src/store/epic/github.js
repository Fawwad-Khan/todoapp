import BaseEpic from './BaseEpic';
import { GithubAction as Action } from '../action/index';

const Epics = new BaseEpic(Action);

export default [
    Epics.epic(Action.GET_USER_INFO),
];