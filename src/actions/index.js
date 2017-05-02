import * as ActionTypes from '../ActionTypes';

export function searchUsers(query) {
  return {
    type: ActionTypes.LOGIN,
    payload: {
      query
    }
  };
}
