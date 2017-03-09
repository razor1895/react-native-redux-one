import React, {
  Component
} from 'react';
import {
  View,
  PixelRatio,
  StyleSheet,
  Text,
} from 'react-native';

const ratio = PixelRatio.get() > 2 ? PixelRatio.get() : 3;

const styles = StyleSheet.create({
  slideItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(250,252,255)',
  },
  slideItemImage: {
    width: 1024 / ratio,
    height: 1024 / ratio,
    resizeMode: 'cover',
  },
  dotStyle: {
    width: 15 / ratio,
    height: 15 / ratio,
    borderRadius: 7.5 / ratio,
  },
  activeDotStyle: {
    width: 15 / ratio,
    height: 15 / ratio,
    borderRadius: 7.5 / ratio,
    backgroundColor: 'rgb(108,122,147)',
  }
});

class App extends Component {
  render() {
    return (
      <View style={styles.slideItem}>
        <Text>hello, world</Text>
      </View>
    );
  }
}

export default App;
