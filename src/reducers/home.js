import Immutable from 'immutable';
import { createReducer } from 'redux-immutablejs';
import * as ActionTypes from '../ActionTypes';

const initialState = Immutable.fromJS({
  feeds: {
    id: '',
    date: '',
    weather: {},
    content_list: [],
  },
  ids: [],
});

export default createReducer(initialState, {
  [ActionTypes.RECEIVED_HOME_FEEDS_LIST]: (state, action) => state.set('feeds', Immutable.fromJS(action.payload.dataList)),
  [ActionTypes.RECEIVED_HOME_ID_LIST]: (state, action) => state.set('ids', Immutable.fromJS(action.payload.dataList))
});
