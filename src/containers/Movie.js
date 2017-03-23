import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import * as Icons from '../images/Icon';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerIcon: {
    resizeMode: 'contain',
    width: 24,
    height: 24,
  }
});

class MovieScreen extends React.Component {
  static navigationOptions = {
    title: '一个影视',
    header: {
      visible: true
    },
    tabBar: {
      visible: false
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          影视
        </Text>
      </View>
    );
  }
}

export default MovieScreen;
