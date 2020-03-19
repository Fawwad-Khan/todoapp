const { NODE_ENV, REACT_APP_VERSION, REACT_APP_SERVER, REACT_APP_PORT } = process.env;
const appVersion = REACT_APP_VERSION;
const __DEV__ = (NODE_ENV === 'development') ? true : false;

const config = {
    auth_key: null,
    api: `http://${REACT_APP_SERVER}:${REACT_APP_PORT}`,
    githubAPI: "https://api.github.com",
    endpoints: {
        AUTH: {
            login: 'auth/login',
            register: 'auth/register',
            profile: 'auth/profile',  // /user/profile
        },
        GITHUB: {
            getUserInfo: 'users/:username'
        },
        DASHBOARD: {
            getCounts: 'dashboard/:cid', //  dashboard/company_id
        },
    }
};

const log = (...msgs) => {
    let header = 'Dev-Log: ';
    __DEV__ && console.log(header, ...msgs);
};

export {
    config,
    appVersion,
    log,
};