import { AuthAction, successActionOf, failureActionOf } from '../action/index';
// import { LocalStorage } from '../../service/index';
// import { log } from '../../config/index';

const initState = {
    loader: false,
    isAuthenticated: false,
    user: null
};

function Reducer(state = initState, action) {
    switch (action.type) {

        case AuthAction.LOGIN:
        case AuthAction.RESGITER:
            return { ...state, loader: true, error: null };

        case successActionOf(AuthAction.LOGIN):
        case successActionOf(AuthAction.RESGITER):
            return { ...state, loader: false, isAuthenticated: true, user: action.payload, error: null };

        case failureActionOf(AuthAction.LOGIN):
        case failureActionOf(AuthAction.RESGITER):
            return { ...state, loader: false, isAuthenticated: false, error: action.payload };

        default:
            return state
    }
}

export default Reducer;