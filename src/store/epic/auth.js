import BaseEpic from './BaseEpic';
import { AuthAction as Action } from '../action/index';

const Epics = new BaseEpic(Action);

export default [
    Epics.epic(Action.LOGIN),
    Epics.epic(Action.RESGITER),
    Epics.epic(Action.PROFILE)
];