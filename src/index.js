import React from 'react';
import 'rxjs';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { TabBarNavigation } from './tabBar';

const store = configureStore();
function One() {
  return (
    <Provider store={store}>
      <TabBarNavigation />
    </Provider>
  );
}

export default One;
