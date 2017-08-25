import { combineEpics } from 'redux-observable';
import searchUsers from './user';
import { fetchReadingFeedsListEpic, fetchStoryEpic } from './reading';
import { fetchMovieFeedsListEpic } from './movie';
import { fetchMusicFeedsListEpic, fetchPlayableSongUrl } from './music';
import { fetchHomeFeedsListEpic, fetchHomeIdListEpic } from './home';
import {
  fetchBannersEpic,
  fetchTopicsEpic,
  fetchHotAuthorsEpic,
  fetchQAsEpic,
  fetchTopicContentEpic
} from './topic';

export default combineEpics(
  // searchUsers,
  fetchStoryEpic,
  fetchReadingFeedsListEpic,
  fetchMovieFeedsListEpic,
  fetchMusicFeedsListEpic,
  fetchPlayableSongUrl,
  fetchHomeFeedsListEpic,
  fetchHomeIdListEpic,
  fetchBannersEpic,
  fetchTopicsEpic,
  fetchHotAuthorsEpic,
  fetchQAsEpic,
  fetchTopicContentEpic
);
