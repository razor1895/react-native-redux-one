import * as ActionTypes from '../ActionTypes';
import * as readingServices from '../services/reading';
import { receiveReadingFeedsList } from '../actions';

export const fetchReadingFeedsListEpic = action$ =>
  action$.ofType(ActionTypes.REQUESTED_READING_FEEDS_LIST)
    .switchMap(action =>
      readingServices.getReadingFeedsList(action.payload.startId, action.payload.params)
        .map(res => receiveReadingFeedsList(action.payload.startId, res.data))
    );

