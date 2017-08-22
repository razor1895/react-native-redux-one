import * as requestService from './request';

export const getBannerList = formData => requestService.get('/banner/list/3', formData);
export const getTopicList = formData => requestService.get('/banner/list/4', formData);
export const getQAList = formData => requestService.get('/banner/list/5', formData);
export const getHotAuthorList = formData => requestService.get('/author/hot', formData);
