import { Platform } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers';
import devTools from 'remote-redux-devtools';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
const middlewares = [
  thunkMiddleware,
];


if (isDebuggingInChrome) {
  // middlewares.push(logger);
}


export default function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    // applyMiddleware(...middlewares),
    compose(
      applyMiddleware(...middlewares),
      devTools({
        name: Platform.OS,
        hostname: '172.168.1.108',
        port: 5678,
        realtime: true,
      })
   )
  );

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../Reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  if (isDebuggingInChrome) {
    window.store = store;
  }

  return store;
}
