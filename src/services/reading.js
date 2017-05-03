import * as requestService from './request';

export const getReadingFeedsList = (startId, formData) => requestService.get(`/channel/reading/more/${startId}`, formData);
