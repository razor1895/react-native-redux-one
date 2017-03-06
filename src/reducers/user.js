import * as types from '../constants/ActionTypes';

const initialState = {
  isUserLoggedIn: false,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case types.LOGGED_IN:
      return {
        ...state,
        isUserLoggedIn: true,
      };

    default:
      return state;
  }
}
