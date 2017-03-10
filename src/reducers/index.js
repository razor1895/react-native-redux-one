import { combineReducers } from 'redux-immutablejs';
import user from './User';
import nav from './Nav';

export default combineReducers({
  user,
  nav
});
