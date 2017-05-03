import Immutable from 'immutable';
import { createReducer } from 'redux-immutablejs';
import * as ActionTypes from '../ActionTypes';

const initialState = Immutable.fromJS({
  feedsList: [],
});

export default createReducer(initialState, {
  [ActionTypes.RECEIVED_MOVIE_FEEDS_LIST]: (state, action) => state.set('feedsList', Immutable.fromJS(action.payload.dataList)),
});
