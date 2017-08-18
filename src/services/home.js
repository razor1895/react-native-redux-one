import * as requestService from './request';

export const getHomeFeeds = (location, id, formData) => requestService.get(`/channel/one/${id}/${location}`, formData);
export const getHomeIdList = formData => requestService.get('/onelist/idlist', formData);
export const getCityName = fetch('http://freegeoip.net/json/');
