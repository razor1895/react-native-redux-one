import * as ActionTypes from '../ActionTypes';
import * as movieServices from '../services/movie';
import { receiveHomeFeedsList } from '../actions';

export const fetchMovieFeedsListEpic = action$ =>
  action$.ofType(ActionTypes.REQUESTED_HOME_FEEDS_LIST)
    .switchMap(action =>
      movieServices.getMovieFeedsList(action.payload.startId, action.payload.params)
        .map(res => receiveHomeFeedsList(action.payload.startId, res.data))
    );

