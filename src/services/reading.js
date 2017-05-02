import * as requestService from './request';

export const getReadingFeedsList = (startId, formData) => requestService.getJSON(`/channel/reading/more/${startId}`, formData);
