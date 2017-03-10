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

const MovieScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text>
      阅读
    </Text>
  </View>
);

MovieScreen.navigationOptions = {
  title: '阅读',
};

export default MovieScreen;
