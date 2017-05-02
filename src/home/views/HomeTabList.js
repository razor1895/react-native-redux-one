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

const HomeScreen = () => (
  <View style={styles.container}>
    <Text>
      Home Screen
    </Text>
  </View>
);

export default HomeScreen;
