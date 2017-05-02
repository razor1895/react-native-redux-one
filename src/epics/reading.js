import * as ActionTypes from '../ActionTypes';
import * as readingServices from '../services/reading';
import { receiveReadingFeedsList } from '../actions';

export default function fetchReadingFeedsList(action$) {
  return action$.ofType(ActionTypes.REQUESTED_READING_FEEDS_LIST)
    .map(action =>
      readingServices.getReadingFeedsList(action.payload.startId, action.payload.params)
        .map(receiveReadingFeedsList.bind(null, action.payload.startId))
    );
}
