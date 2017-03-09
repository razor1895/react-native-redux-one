import Immutable from 'immutable';
import { createReducer } from 'redux-immutablejs';
import * as types from '../constants/ActionTypes';

const initialState = Immutable.fromJS({ isAuth: false });

export default createReducer(initialState, {
  [types.LOGIN]: (state, action) => state.merge({
    isAuth: true,
    token: action.payload.token
  }),

  [types.LOGOUT]: (domain) => domain.merge({
    isAuth: false,
    current_identity: {},
    token: undefined
  })
});
