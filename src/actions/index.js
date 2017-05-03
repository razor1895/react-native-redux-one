import * as ActionTypes from '../ActionTypes';

export function searchUsers(query) {
  return {
    type: ActionTypes.LOGIN,
    payload: {
      query
    }
  };
}

export const requestReadingFeedsList = (startId, params) => ({
  type: ActionTypes.REQUESTED_READING_FEEDS_LIST,
  payload: {
    startId,
    params
  }
});

export const receiveReadingFeedsList = (startId, dataList) => ({
  type: ActionTypes.RECEIVED_READING_FEEDS_LIST,
  payload: {
    startId,
    dataList
  }
});
