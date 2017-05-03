import * as requestService from './request';

export const getMovieFeedsList = (startId, formData) => requestService.get(`/channel/movie/more/${startId}`, formData);
