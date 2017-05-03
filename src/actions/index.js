import * as ActionTypes from '../ActionTypes';

export function searchUsers(query) {
  return {
    type: ActionTypes.LOGIN,
    payload: {
      query
    }
  };
}

/**
* @function requestReadingFeedsList
* @param  {int} startId {起始ID，用于分页请求数据}
* @param  {object} params  {uuid, user_id, platform, version}
* @return {object} {type, payload}
*/
export const requestReadingFeedsList = (startId, params) => ({
  type: ActionTypes.REQUESTED_READING_FEEDS_LIST,
  payload: {
    startId,
    params
  }
});

/**
* @function receiveReadingFeedsList
* @param  {int} startId  {起始ID，用于分页请求数据}
* @param  {array} dataList {接口返回的阅读列表数据}
* @return {object} {type, payload}
*/
export const receiveReadingFeedsList = (startId, dataList) => ({
  type: ActionTypes.RECEIVED_READING_FEEDS_LIST,
  payload: {
    startId,
    dataList
  }
});

/**
* @function requestMovieFeedsList
* @param  {int} startId {起始ID，用于分页请求数据}
* @param  {object} params  {uuid, user_id, platform, version}
* @return {object} {type, payload}
*/
export const requestMovieFeedsList = (startId, params) => ({
  type: ActionTypes.REQUESTED_MOVIE_FEEDS_LIST,
  payload: {
    startId,
    params
  }
});

/**
* @function receiveMovieFeedsList
* @param  {int} startId  {起始ID，用于分页请求数据}
* @param  {array} dataList {接口返回的电影列表数据}
* @return {object} {type, payload}
*/
export const receiveMovieFeedsList = (startId, dataList) => ({
  type: ActionTypes.RECEIVED_MOVIE_FEEDS_LIST,
  payload: {
    startId,
    dataList
  }
});
