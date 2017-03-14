import Immutable from 'immutable';
import { createReducer } from 'redux-immutablejs';
import * as types from '../constants/ActionTypes';

const initialState = Immutable.fromJS({
  index: 0,
  routes: [
    { key: 'one_home', routeName: 'HomeTab' },
    { key: 'one_reading', routeName: 'ReadingTab' },
    { key: 'one_music', routeName: 'MusicTab' },
    { key: 'one_movie', routeName: 'MovieTab' }
  ]
});

export default createReducer(initialState, {
  [types.LOGIN]: (state, action) => state.merge({
    isAuth: true,
    token: action.payload.token
  }),

  [types.LOGOUT]: domain => domain.merge({
    isAuth: false,
    current_identity: {},
    token: undefined
  })
});
