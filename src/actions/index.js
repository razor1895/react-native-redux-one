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

/**
* @function requestMusicFeedsList
* @param  {int} startId {起始ID，用于分页请求数据}
* @param  {object} params  {uuid, user_id, platform, version}
* @return {object} {type, payload}
*/
export const requestMusicFeedsList = (startId, params) => ({
  type: ActionTypes.REQUESTED_MUSIC_FEEDS_LIST,
  payload: {
    startId,
    params
  }
});

/**
* @function receiveMusicFeedsList
* @param  {int} startId  {起始ID，用于分页请求数据}
* @param  {array} dataList {接口返回的音乐列表数据}
* @return {object} {type, payload}
*/
export const receiveMusicFeedsList = (startId, dataList) => ({
  type: ActionTypes.RECEIVED_MUSIC_FEEDS_LIST,
  payload: {
    startId,
    dataList
  }
});

/**
* @function requestMusicFeedsList
* @param  {int} songId {songId, 虾米歌曲Id, 用于返回可播放的url地址}
* @return {object} {type, payload}
*/
export const requestPlayableSongUrl = songId => ({
  type: ActionTypes.REQUESTED_PLAYABLE_SONG_URL,
  payload: {
    songId
  }
});

/**
* @function receiveMusicFeedsList
* @param  {int} songId  {songId, 虾米歌曲Id, 用于返回可播放的url地址}
* @param  {str} songUrl {接口返回的歌曲播放地址}
* @return {object} {type, payload}
*/
export const receivePlayableSongUrl = (songId, songUrl) => ({
  type: ActionTypes.RECEIVED_PLAYABLE_SONG_URL,
  payload: {
    songId,
    songUrl
  }
});

/**
* @function playInfinitelyLoopedSong
* @param  {int} { {歌曲Id}
* @return {object} {type, payload}
*/
export const playSingleSong = songId => ({
  type: ActionTypes.PLAY_SINGLE_SONG,
  payload: {
    songId
  }
});

/**
* @function stopSingleSong
* @description 暂停播放音乐
* @return {object} {type, payload}
*/
export const stopSingleSong = () => ({
  type: ActionTypes.STOP_SINGLE_SONG,
});

/**
* @function requestHomeFeedsList
* @param  {string} location {城市，用于获取所在城市的天气信息}
* @param  {int}    id {首页是每天六点更新的，这是获取对应日期数据的id}
* @param  {object} params  {uuid, user_id, platform, version}
* @return {object} {type, payload}
*/
export const requestHomeFeedsList = (location, id, params) => ({
  type: ActionTypes.REQUESTED_HOME_FEEDS_LIST,
  payload: {
    location,
    id,
    params
  }
});

/**
* @function receiveHomeFeedsList
* @param  {array} dataList {接口返回的首页列表数据}
* @return {object} {type, payload}
*/
export const receiveHomeFeedsList = dataList => ({
  type: ActionTypes.RECEIVED_HOME_FEEDS_LIST,
  payload: {
    dataList
  }
});

/**
* @function requestHomeIdList
* @param  {object} params  {uuid, user_id, platform, version}
* @return {object} {type, payload}
*/
export const requestHomeIdList = params => ({
  type: ActionTypes.REQUESTED_HOME_ID_LIST,
  payload: {
    params
  }
});

/**
* @function receiveHomeIdList
* @param  {array} dataList {接口返回的首页需要的ID列表}
* @return {object} {type, payload}
*/
export const receiveHomeIdList = dataList => ({
  type: ActionTypes.RECEIVED_HOME_ID_LIST,
  payload: {
    dataList
  }
});
