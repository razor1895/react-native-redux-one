import { combineReducers } from 'redux-immutablejs';
import user from './user';
import tabBarNavigationState from './tabBarNavigationState';
import homeTabNavigationState from './homeTabNavigationState';
import readingTabNavigationState from './readingTabNavigationState';
import musicTabNavigationState from './musicTabNavigationState';
import movieTabNavigationState from './movieTabNavigationState';

export default combineReducers({
  user,
  // tabBarNavigationState,
  // homeTabNavigationState,
  // readingTabNavigationState,
  // musicTabNavigationState,
  // movieTabNavigationState,
});
