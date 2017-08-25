import * as ActionTypes from '../ActionTypes';
import * as topicService from '../services/topic';
import {
  receivedHotAuthorList,
  receivedBannerList,
  receivedQAList,
  receivedTopicList,
  receivedTopicContent
} from '../actions';

export const fetchHotAuthorsEpic = action$ =>
  action$.ofType(ActionTypes.REQUESTED_HOT_AUTHOR_LIST)
    .switchMap(action =>
      topicService.getHotAuthorList(action.payload.params)
        .map(res => receivedHotAuthorList(res.data))
    );

export const fetchBannersEpic = action$ =>
  action$.ofType(ActionTypes.REQUESTED_BANNER_LIST)
    .switchMap(action =>
      topicService.getBannerList(action.payload.params)
        .map(res => receivedBannerList(res.data))
    );

export const fetchQAsEpic = action$ =>
  action$.ofType(ActionTypes.REQUESTED_QA_LIST)
    .switchMap(action =>
      topicService.getQAList(action.payload.params)
        .map(res => receivedQAList(res.data))
    );

export const fetchTopicsEpic = action$ =>
  action$.ofType(ActionTypes.REQUESTED_TOPIC_LIST)
    .switchMap(action =>
      topicService.getTopicList(action.payload.params)
        .map(res => receivedTopicList(res.data))
    );

export const fetchTopicContentEpic = action$ =>
  action$.ofType(ActionTypes.REQUESTED_TOPIC_CONTENT)
    .switchMap(({ payload }) =>
      topicService.getTopicContent(payload.contentId, payload.params)
        .map(res => receivedTopicContent(res.data))
    );

