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

const MusicDetail = () => (
  <View style={styles.container}>
    <Text>
      Music Detail
    </Text>
  </View>
);

export default MusicDetail;
