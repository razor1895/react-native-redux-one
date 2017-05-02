import { Observable } from 'rxjs/Observable';
import rootConfig from '../config';

const urlPrefix = rootConfig.domain + rootConfig.apiPath;
const isDebuggingInChrome = rootConfig.dev && !!window.navigator.userAgent;

function filterJSON(res) {
  return res.json();
}

function filterStatus(res) {
  if (res.status >= 200 && res.status < 300) {
    return res;
  }

  const error = new Error(res.statusText);
  error.msg = JSON.stringify(res);
  error.type = 'http';
  throw error;
}

function consoleOutput(res) {
  console.info(res);
  return res;
}

export function get(urlPath, params) {
  let url = urlPrefix + urlPath;
  const body = Object.assign({ version: rootConfig.apiVersion }, params);

  if (params) {
    const urlEncodeKeys = Object.keys(params).map(v => `${v}=${params[v]}`).join('&');
    url += `?${urlEncodeKeys}`;
  }

  if (isDebuggingInChrome) {
    console.info('GET: ', url);
    console.info('Params: ', body);
  }

  const request = fetch(url, { method: 'GET' }).then(filterStatus).then(filterJSON);
  return Observable.from(request);
}

export function post(urlPath, params, data) {
  let url = urlPrefix + urlPath;
  let request;

  const body = Object.assign({ version: rootConfig.apiVersion }, params);

  if (params) {
    const urlEncodeKeys = Object.keys(params).map(v => `${v}=${params[v]}`).join('&');
    url += `?${urlEncodeKeys}`;
  }

  if (isDebuggingInChrome) {
    console.info('postJson');
    console.info('POST: ', url);
    console.info('Body: ', body);
  }

  if (isDebuggingInChrome) {
    request = fetch(url, { method: 'POST', body: data }).then(filterStatus).then(filterJSON).then(consoleOutput);
  }

  request = fetch(url, { method: 'POST', body: data }).then(filterStatus).then(filterJSON);
  return Observable.from(request);
}
