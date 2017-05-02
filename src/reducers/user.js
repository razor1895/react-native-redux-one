import Immutable from 'immutable';
import { createReducer } from 'redux-immutablejs';
import * as ActionTypes from '../ActionTypes';

const initialState = Immutable.fromJS({ isAuth: false });

export default createReducer(initialState, {
  [ActionTypes.LOGIN]: (state, action) => state.merge({
    isAuth: true,
    token: action.payload.token
  }),

  [ActionTypes.LOGOUT]: domain => domain.merge({
    isAuth: false,
    current_identity: {},
    token: undefined
  })
});
