import { GithubAction, successActionOf, failureActionOf } from '../action/index';
// import { log } from '../../config/index';

const initState = {
    loader: false,
    error: false,
    user: null,
};

function Reducer(state = initState, action) {

    switch (action.type) {

        case GithubAction.GET_USER_INFO:
            return { ...state, user: null, loader: true, error: null };

        case successActionOf(GithubAction.GET_USER_INFO):
            return { ...state, user: action.payload, loader: false };

        case failureActionOf(GithubAction.GET_USER_INFO):
            return { ...state, error: action.payload, loader: false };

        default:
            return state
    }
}

export default Reducer;