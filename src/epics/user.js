import { Observable } from 'rxjs/Observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import * as ActionTypes from '../ActionTypes';
import { receiveUsers } from '../actions';


export default function searchUsers(action$) {
  return action$.ofType(ActionTypes.LOGIN)
    .map(action => action.payload.query)
    .filter(q => !!q)
    .switchMap(q =>
      Observable.timer(800) // debounce
        .takeUntil(action$.ofType(ActionTypes.CLEARED_SEARCH_RESULTS))
        .mergeMap(() => Observable.merge(
          ajax.getJSON(`https://api.github.com/search/users?q=${q}`)
            .map(res => res.items)
            .map(receiveUsers)
        ))
    );
}
