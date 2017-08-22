import Immutable from 'immutable';
import { createReducer } from 'redux-immutablejs';
import * as ActionTypes from '../ActionTypes';

const initialState = Immutable.fromJS({
  hotAuthors: [],
  QAs: [],
  banners: [],
  topics: []
});

export default createReducer(initialState, {
  [ActionTypes.RECEIVED_HOT_AUTHOR_LIST]: (state, action) => state.set('hotAuthors', Immutable.fromJS(action.payload.data)),
  [ActionTypes.RECEIVED_BANNER_LIST]: (state, action) => state.set('banners', Immutable.fromJS(action.payload.data)),
  [ActionTypes.RECEIVED_TOPIC_LIST]: (state, action) => state.set('topics', Immutable.fromJS(action.payload.data)),
  [ActionTypes.RECEIVED_QA_LIST]: (state, action) => state.set('QAs', Immutable.fromJS(action.payload.data)),
});
