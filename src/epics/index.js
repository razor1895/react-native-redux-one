import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import searchUsers from './user';
import { fetchReadingFeedsListEpic } from './reading';
import { receiveReadingFeedsList } from '../actions';

export default combineEpics(
  // searchUsers,
  fetchReadingFeedsListEpic,
  action$ =>
    action$.ofType('REQUESTED_USER_REPOS')
    .map(action => action.payload.user)
    .switchMap(user =>
      Observable.from(fetch(`http://v3.wufazhuce.com:8000/api/channel/reading/more/0?platform=ios&user_id=&version=v4.1.1`).then(r => r.json()))
        .map(payload => receiveReadingFeedsList(user, payload))
    )
);
