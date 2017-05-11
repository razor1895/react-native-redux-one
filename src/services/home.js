import * as requestService from './request';

export const getHomeFeedsList = (location, id, formData) => requestService.get(`/onelist/${id}/${location}`, formData);
export const getHomeIdList = formData => requestService.get('/onelist/idlist', formData);
export const getCityName = fetch('http://freegeoip.net/json/');
