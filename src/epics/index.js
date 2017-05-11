import { combineEpics } from 'redux-observable';
import searchUsers from './user';
import { fetchReadingFeedsListEpic, fetchStoryEpic } from './reading';
import { fetchMovieFeedsListEpic } from './movie';
import { fetchMusicFeedsListEpic, fetchPlayableSongUrl } from './music';
import { fetchHomeFeedsListEpic, fetchHomeIdListEpic } from './home';

export default combineEpics(
  // searchUsers,
  fetchStoryEpic,
  fetchReadingFeedsListEpic,
  fetchMovieFeedsListEpic,
  fetchMusicFeedsListEpic,
  fetchPlayableSongUrl,
  fetchHomeFeedsListEpic,
  fetchHomeIdListEpic
);
