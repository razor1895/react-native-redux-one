import * as ActionTypes from '../ActionTypes';
import * as movieServices from '../services/movie';
import { receiveMovieFeedsList } from '../actions';

export const fetchMovieFeedsListEpic = action$ =>
  action$.ofType(ActionTypes.REQUESTED_MOVIE_FEEDS_LIST)
    .switchMap(action =>
      movieServices.getMovieFeedsList(action.payload.startId, action.payload.params)
        .map(res => receiveMovieFeedsList(action.payload.startId, res.data))
    );

