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
  }
});

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text>
      Profile Screen
    </Text>
  </View>
);

// HomeScreen.navigationOptions = {
//   header: {
//     title: '一个影视',
//     /*right: (
//       <Image
//         source={Icons.search}
//         style={styles.headerIcon}
//       />
//     ),*/
//     visible: true
//   }
// };

export default HomeScreen;
