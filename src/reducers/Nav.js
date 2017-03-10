import Immutable from 'immutable';
import { createReducer } from 'redux-immutablejs';
import * as types from '../constants/ActionTypes';

const initialState = Immutable.fromJS({
  index: 1,
  routes: [
    { key: 'one_home', routeName: 'Home' },
    { key: 'one_reading', routeName: 'Reading' },
    { key: 'one_music', routeName: 'Music' },
    { key: 'one_movie', routeName: 'Movie' }
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
