import Immutable from 'immutable';
import { createReducer } from 'redux-immutablejs';
import * as ActionTypes from '../ActionTypes';

const initialState = Immutable.fromJS({
  feedsList: [],
  story: {}
});

export default createReducer(initialState, {
  [ActionTypes.RECEIVED_READING_FEEDS_LIST]: (state, action) => state.set('feedsList', Immutable.fromJS(action.payload.dataList)),
  [ActionTypes.RECEIVED_STORY]: (state, action) => state.merge({
    story: state.get('story').merge({
      [action.payload.data.content_id]: action.payload.data
    })
  })
});
