import * as ActionTypes from '../ActionTypes';
import * as homeServices from '../services/home';
import { receiveHomeFeedsList } from '../actions';

export const fetchHomeFeedsListEpic = action$ =>
  action$.ofType(ActionTypes.REQUESTED_HOME_FEEDS_LIST)
    .switchMap(action =>
      homeServices.getHomeFeedsList(action.payload.location, action.payload.id, action.payload.params)
        .map(res => receiveHomeFeedsList(res.data))
    );

