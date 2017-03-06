import React, {
  Component
} from 'react';
import {
  View,
  PixelRatio,
  StyleSheet,
  Image,
} from 'react-native';
import Swiper from 'react-native-swiper';

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

const landingGIFs = [require('../images/1.gif'), require('../images/2.gif'), require('../images/3.gif'), require('../images/4.gif')];

class App extends Component {
  render() {
    return (
      <Swiper
        style={styles.wrapper}
        paginationStyle={{ bottom: 150 }}
        activeDotStyle={styles.activeDotStyle}
        dotStyle={styles.dotStyle}
      >
        {
          [0, 1, 2, 3].map(v => (
            <View style={styles.slideItem} key={v}>
              <Image source={landingGIFs[v]} style={styles.slideItemImage} />
            </View>
          ))
        }
      </Swiper>
    );
  }
}

export default App;
