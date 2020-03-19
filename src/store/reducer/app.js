import { successActionOf, failureActionOf, AuthAction } from '../action';

const initState = {
    loader: false,
    error: null,
    success: null,
};

const ToastMessages = {
    [successActionOf(AuthAction.LOGIN)]: 'Login Successfully',
    [successActionOf(AuthAction.REGISTER)]: "Resgitered Successfully",

    [failureActionOf(AuthAction.LOGIN)]: 'Login Failure',
    [failureActionOf(AuthAction.REGISTER)]: "Resgitered Failure",
};

function Reducer(state = initState, action) {

    switch (action.type) {

        case AuthAction.LOGIN:
        case AuthAction.REGISTER:
        case AuthAction.PROFILE:
            return { ...state, errorMsg: null, success: null, loader: true };

        case successActionOf(AuthAction.LOGIN):
        case successActionOf(AuthAction.REGISTER):
        case successActionOf(AuthAction.PROFILE):
            return { ...state, errorMsg: null, loader: false, success: ToastMessages[action.type] };


        case failureActionOf(AuthAction.LOGIN):
        case failureActionOf(AuthAction.REGISTER):
        case failureActionOf(AuthAction.PROFILE):
            return { ...state, loader: false, error: ToastMessages[action.type] };

        default:
            return state
    }
}

export default Reducer;