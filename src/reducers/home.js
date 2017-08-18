import Immutable from 'immutable';
import { createReducer } from 'redux-immutablejs';
import * as ActionTypes from '../ActionTypes';

const initialState = Immutable.fromJS({
  feeds: {},
  ids: [],
});

export default createReducer(initialState, {
  [ActionTypes.RECEIVED_HOME_FEEDS]: (state, action) => state.update('feeds', v => v.set(action.payload.key, Immutable.fromJS(action.payload.response))),
  [ActionTypes.RECEIVED_HOME_ID_LIST]: (state, action) => state.set('ids', Immutable.fromJS(action.payload.dataList))
});
