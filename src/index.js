import React,{
  Component
} from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppContainer from './containers/App';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}


export default App;
