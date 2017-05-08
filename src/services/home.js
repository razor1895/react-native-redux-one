import * as requestService from './request';

export const getHomeFeedsList = (location, id, formData) => requestService.get(`/onelist/${id}/${location}`, formData);
