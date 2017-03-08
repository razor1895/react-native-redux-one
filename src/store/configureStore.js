import { Platform } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import devTools from 'remote-redux-devtools';
import asyncThunkMiddleware from 'redux-async-thunk';
import reducers from '../reducers';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
const middlewares = [
  thunkMiddleware,
];

export default function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    // applyMiddleware(...middlewares),
    compose(
      applyMiddleware(...middlewares),
      devTools({
        name: Platform.OS,
        hostname: 'localhost',
        port: 5678,
        realtime: true,
      })
   )
  );

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  if (isDebuggingInChrome) {
    window.store = store;
  }

  return store;
}
