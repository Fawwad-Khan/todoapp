import { /*Observable, from,*/ of } from "rxjs";
import { switchMap, map, catchError } from 'rxjs/operators';
import { ofType } from "redux-observable";
import { failureActionOf, successActionOf } from "../action/index";
import { HttpService } from "../../service";
// import { log } from "../../config";

export default class BaseEpic {

    constructor(action) {
        this.Action = action;
        this.http = HttpService;
        // this.Get = this.epic(this.Action.GET);
        // this.Add = this.epic(this.Action.ADD);
        // this.Update = this.epic(this.Action.UPDATE);
        // this.Delete = this.epic(this.Action.DELETE);
    }

    _getParams(params, url) {
        if (params) {
            Object.keys(params).forEach((p) => {
                url = url.replace(`:${p}`, `${params[[p]] || ''}`);
            });
        }
        return url;
    }

    _getQuery(query, url) {
        if (query) {
            url += "?";
            Object.keys(query).forEach((y) => {
                url += `${y}=${query[y]}&`;
            });
            url = url.replace(/&$/, '');
        }
        return url;
    }

    epic = (Action) => (action$) => action$.pipe(
        ofType(Action),
        switchMap(({ payload }) => {
            const { host, path, params, query, body, method } = payload;
            let url = `${host}/${path}`;
            url = this._getParams(params, url);
            url = this._getQuery(query, url);
            return HttpService[method](url, body).pipe(
                map(({ status, response }) => ({
                    type: (status === 200) ? successActionOf(Action) : failureActionOf(Action),
                    payload: response
                })),
                catchError(response => of({
                    type: failureActionOf(Action),
                    payload: response
                }))
            )
        })
    )

}

// // dummy/FAKE API Call
// // return from(new Promise(res => setTimeout(res, 2000))).pipe(map(res => {
// //     log('fake call,', res)
// //     return {
// //         type: successActionOf(AuthAction.LOGIN),
// //         payload: res
// //     }
// // }));