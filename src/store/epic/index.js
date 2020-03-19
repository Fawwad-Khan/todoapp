import AuthEpics from './auth';
import GithubEpics from './github';

export default [
    ...AuthEpics,
    ...GithubEpics
]