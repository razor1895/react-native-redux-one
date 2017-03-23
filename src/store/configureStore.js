import Immutable from 'immutable';
import asyncThunkMiddleware from 'redux-async-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
const middlewares = [
  asyncThunkMiddleware,
];
const composeEnhancers = typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

export default function configureStore() {
  const state = Immutable.fromJS({});

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
