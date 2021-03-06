import * as ActionTypes from '../ActionTypes';
import * as readingServices from '../services/reading';
import { receiveReadingFeedsList, receiveStory } from '../actions';

export const fetchReadingFeedsListEpic = action$ =>
  action$.ofType(ActionTypes.REQUESTED_READING_FEEDS_LIST)
    .switchMap(action =>
      readingServices.getReadingFeedsList(action.payload.startId, action.payload.params)
        .map(res => receiveReadingFeedsList(action.payload.startId, res.data))
    );

export const fetchStoryEpic = action$ =>
  action$.ofType(ActionTypes.REQUESTED_STORY)
    .switchMap(action =>
      readingServices.getStory(action.payload.storyId, action.payload.params)
        .map(res => receiveStory(res.data))
    );

