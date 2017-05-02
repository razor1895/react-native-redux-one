import Immutable from 'immutable';
import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import epics from './epics';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
const epicMiddleware = createEpicMiddleware(epics);
const middlewares = [
  epicMiddleware,
];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

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
      const nextRootReducer = require('./reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  if (isDebuggingInChrome) {
    window.store = store;
  }

  return store;
}
