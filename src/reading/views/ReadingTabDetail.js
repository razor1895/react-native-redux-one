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

const ReadingDetail = () => (
  <View style={styles.container}>
    <Text>
      Reading Detail
    </Text>
  </View>
);

export default ReadingDetail;
