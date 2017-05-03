import * as requestService from './request';

export const getMusicFeedsList = (startId, formData) => requestService.get(`/channel/music/more/${startId}`, formData);
