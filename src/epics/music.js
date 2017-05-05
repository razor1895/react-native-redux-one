import { Observable } from 'rxjs/Observable';
import * as ActionTypes from '../ActionTypes';
import * as musicService from '../services/music';
import { receiveMusicFeedsList, receivePlayableSongUrl, playSingleSong } from '../actions';

export const fetchMusicFeedsListEpic = action$ =>
  action$.ofType(ActionTypes.REQUESTED_MUSIC_FEEDS_LIST)
    .switchMap(action =>
      musicService.getMusicFeedsList(action.payload.startId, action.payload.params)
        .map(res => receiveMusicFeedsList(action.payload.startId, res.data))
    );

export const fetchPlayableSongUrl = action$ =>
  action$.ofType(ActionTypes.REQUESTED_PLAYABLE_SONG_URL)
    .switchMap(action =>
      musicService.getPlayableSongUrl(action.payload.songId)
        .mergeMap(res => Observable.concat(
          Observable.of(receivePlayableSongUrl(action.payload.songId, res.url)),
          Observable.of(playSingleSong(action.payload.songId))
        ))
    );
