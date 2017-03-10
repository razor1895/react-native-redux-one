import Immutable from 'immutable';
import { composeWithDevTools } from 'remote-redux-devtools';
import asyncThunkMiddleware from 'redux-async-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
const middlewares = [
  asyncThunkMiddleware,
];

export default function configureStore() {
  const state = Immutable.fromJS({});
  const composeEnhancers = composeWithDevTools({ realtime: true, port: 5678 });

  const store = createStore(
    reducers,
    state,
    // applyMiddleware(...middlewares),
    composeEnhancers(
      applyMiddleware(...middlewares)
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
