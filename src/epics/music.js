import * as ActionTypes from '../ActionTypes';
import * as musicService from '../services/music';
import { receiveMusicFeedsList } from '../actions';

export const fetchMusicFeedsListEpic = action$ =>
  action$.ofType(ActionTypes.REQUESTED_MUSIC_FEEDS_LIST)
    .switchMap(action =>
      musicService.getMusicFeedsList(action.payload.startId, action.payload.params)
        .map(res => receiveMusicFeedsList(action.payload.startId, res.data))
    );

