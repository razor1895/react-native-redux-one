import * as requestService from './request';

export const getMovieFeedsList = (location, id, formData) => requestService.get(`/onelist/${id}/${location}`, formData);
