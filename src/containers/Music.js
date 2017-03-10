import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const MusicScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text>
      音乐
    </Text>
  </View>
);

MusicScreen.navigationOptions = {
  title: '音乐',
};

export default MusicScreen;