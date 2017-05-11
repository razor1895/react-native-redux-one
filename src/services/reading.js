import * as requestService from './request';

export const getReadingFeedsList = (startId, formData) => requestService.get(`/channel/reading/more/${startId}`, formData);
export const getStory = (storyId, formData) => requestService.get(`/essay/${storyId}`, formData);
