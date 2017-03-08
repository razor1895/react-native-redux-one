import React, {
  Component
} from 'react';
// import { Provider } from 'react-redux';
// import configureStore from './store/configureStore';
import AppContainer from '../containers/App';

// const store = configureStore();

/*class One extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}*/

const One = () => <AppContainer />;

export default One;
