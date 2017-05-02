import { ajax } from 'rxjs/observable/dom/ajax';
import rootConfig from '../config';

const urlPrefix = rootConfig.domain + rootConfig.apiPath;
const isDebuggingInChrome = rootConfig.dev && !!window.navigator.userAgent;

export function getJSON(urlPath, params) {
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

  return ajax.getJSON(url);

  // return fetch(url, {
  //   method: 'GET',
  //   headers: {
  //     project: '64dcy68c',
  //   },
  // })
  //   .then(filterStatus)
  //   .then(filterJSON);
}


// export function post(url, body) {
//   url = urlPrefix + url;

//   if (isDebuggingInChrome) {
//     console.info('POST: ', url);
//     console.info('Body: ', body);
//   }

//   const formData = new FormData();
//   Object.keys(body).forEach((v) => {
//     if (Array.isArray(body[v])) {
//       throw new Error('formData error');
//         // formData.append(v, JSON.stringify(body[v]));
//     } else {
//       formData.append(v, body[v]);
//     }
//   });

//   if (isDebuggingInChrome) {
//     return fetch(url, {
//       method: 'POST',
//       body: formData,
//     })
//         .then(filterStatus)
//         .then(filterJSON)
//         .then(test);
//   }

//   return fetch(url, {
//     method: 'POST',
//     body: formData,
//     headers: {
//       project: '64dcy68c',
//     },
//   })
//     .then(filterStatus)
//     .then(filterJSON);
// }

// export function postJson(url, body) {
//   url = urlPrefix + url;

//   if (isDebuggingInChrome) {
//     console.info('postJson');
//     console.info('POST: ', url);
//     console.info('Body: ', body);
//   }

//   if (isDebuggingInChrome) {
//     return fetch(url, {
//       method: 'POST',
//       body: JSON.stringify(body),
//     })
//         .then(filterStatus)
//         .then(filterJSON)
//         .then(test);
//   }

//   return fetch(url, {
//     method: 'POST',
//     body: JSON.stringify(body),
//     headers: {
//       project: '64dcy68c',
//     },
//   })
//     .then(filterStatus)
//     .then(filterJSON);
// }
