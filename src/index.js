import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { App as AppContainer } from './containers/App';

const store = configureStore();

function One() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default One;
