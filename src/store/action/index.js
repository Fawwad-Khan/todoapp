export {default as AuthAction} from './auth';
export {default as TodoAction} from './todo';
export {default as GithubAction} from './github';

const successActionOf = (action) => {
    return `${action}_SUCCESS`;
}
const failureActionOf = (action) => {
    return `${action}_FAILURE`;
}

export {
    successActionOf,
    failureActionOf
}