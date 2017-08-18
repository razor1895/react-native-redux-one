import * as ActionTypes from '../ActionTypes';
import * as homeServices from '../services/home';
import { receiveHomeFeedsList, receiveHomeIdList } from '../actions';

export const fetchHomeFeedsListEpic = action$ =>
  action$.ofType(ActionTypes.REQUESTED_HOME_FEEDS)
    .switchMap(action =>
      homeServices.getHomeFeeds(action.payload.location, action.payload.id, action.payload.params)
        .map(res => receiveHomeFeedsList(action.payload.id, res.data))
    );

export const fetchHomeIdListEpic = action$ =>
  action$.ofType(ActionTypes.REQUESTED_HOME_ID_LIST)
    .switchMap(action =>
      homeServices.getHomeIdList(action.payload.params)
        .map(res => receiveHomeIdList(res.data))
    );

