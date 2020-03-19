import { config } from '../../config/index';

export default class BaseAction {

    constructor(e) {
        this.Entity = e;
        this.GET = this._action('GET');
        this.POST = this._action('POST');
        this.PUT = this._action('PUT');
        this.DELETE = this._action('DELETE');
    }

    _action(action) { return `${this.Entity}_${action}` };

    _payload = (params, query, body, method, path, api) => ({
        host: api || config.api,
        path: path && `${config.endpoints[this.Entity][path]}`,
        method,
        params,
        query,
        body
    });

    get = (params, query, body = null) => {
        return { type: this.GET, payload: this._payload(params, query, body, 'get', 'get') };
    };

    post = (params, query, body = null) => {
        return { type: this.POST, payload: this._payload(params, query, body, 'post', 'post') };
    };

    put = (params, query, body = null) => {
        return { type: this.PUT, payload: this._payload(params, query, body, 'put', 'put') };
    };

    delete = (params, query, body = null) => {
        return { type: this.DELETE, payload: this._payload(params, query, body, 'delete', 'delete') };
    };

}