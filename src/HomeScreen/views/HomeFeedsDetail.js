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

const HomeDetail = () => (
  <View style={styles.container}>
    <Text>
      Home Detail
    </Text>
  </View>
);

export default HomeDetail;
