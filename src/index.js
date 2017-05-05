import React from 'react';
import 'rxjs';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import Sound from 'react-native-sound';
import configureStore from './configureStore';
import { TabBarNavigation } from './tabBar';
const requireAudio = require('./a.mp3');

const store = configureStore();
function One() {
  return (
    <Provider store={store}>
      <TabBarNavigation />
    </Provider>
  );
}

/*class One extends React.Component {
  constructor(props) {
    super(props);
    Sound.setCategory('Ambient', true);

    this.playSoundFromRequire = () => {
      const s = new Sound(requireAudio, (e) => {
        if (e) {
          console.log('error', e);
          return;
        }

        s.play(() => s.release());
      });
    };
  }

  componentDidMount() {
    this.playSoundFromRequire();
  }

  render() {
    return (
      <View>
        <Text>123</Text>
      </View>
    );
  }
}*/

export default One;
