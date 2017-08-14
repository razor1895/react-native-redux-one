import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import epics from './epics';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
const epicMiddleware = createEpicMiddleware(epics);
const nextRootReducer = require('./reducers/index').default;
const nextRootEpic = require('./epics').default;

export default (preloadedState) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducers,
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        epicMiddleware
      )
    )
  );

  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(nextRootReducer);
      epicMiddleware.replaceEpic(nextRootEpic);
    });
  }

  if (isDebuggingInChrome) {
    window.store = store;
  }

  return store;
};
