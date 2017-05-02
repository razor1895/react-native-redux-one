import { combineEpics } from 'redux-observable';
import searchUsers from './user';

export default combineEpics(
  searchUsers
);
