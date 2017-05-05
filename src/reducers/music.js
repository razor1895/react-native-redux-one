import Immutable from 'immutable';
import { createReducer } from 'redux-immutablejs';
import * as ActionTypes from '../ActionTypes';

const initialState = Immutable.fromJS({
  feedsList: [],
  songUrls: {},
  nowPlaying: null,
});

export default createReducer(initialState, {
  [ActionTypes.RECEIVED_MUSIC_FEEDS_LIST]: (state, action) => state.set('feedsList', Immutable.fromJS(action.payload.dataList)),
  [ActionTypes.RECEIVED_PLAYABLE_SONG_URL]: (state, action) => state.update('songUrls', v => v.set(action.payload.songId, action.payload.songUrl)),
  [ActionTypes.PLAY_SINGLE_SONG]: (state, action) => state.set('nowPlaying', action.payload.songId),
  [ActionTypes.STOP_SINGLE_SONG]: state => state.set('nowPlaying', null),
});
