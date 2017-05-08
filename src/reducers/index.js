import { combineReducers } from 'redux-immutablejs';
import user from './user';
import reading from './reading';
import movie from './movie';
import music from './music';
import home from './home';

export default combineReducers({
  user,
  reading,
  movie,
  music,
  home
});
