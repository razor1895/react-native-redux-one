import { combineEpics } from 'redux-observable';
import searchUsers from './user';
import { fetchReadingFeedsListEpic } from './reading';
import { fetchMovieFeedsListEpic } from './movie';
import { fetchMusicFeedsListEpic } from './music';

export default combineEpics(
  // searchUsers,
  fetchReadingFeedsListEpic,
  fetchMovieFeedsListEpic,
  fetchMusicFeedsListEpic
);
