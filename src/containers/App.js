import React, {
  Component
} from 'react';
import {
  View,
  PixelRatio,
  StyleSheet,
  Text,
  Image
} from 'react-native';
import {
  NavigationActions,
  addNavigationHelpers,
  TabNavigator,
} from 'react-navigation';
import { connect } from 'react-redux';

import HomeScreen from './Home';
import ReadingScreen from './Reading';
import MusicScreen from './Music';
import MovieScreen from './Movie';
import * as Icons from '../images/Icon';

const ratio = PixelRatio.get() > 2 ? PixelRatio.get() : 3;
const styles = StyleSheet.create({
  tabIcon: {
    width: 90,
    height: 49,
    resizeMode: 'cover'
  },
});

const AppNavigator = TabNavigator({
  HomeTab: {
    screen: HomeScreen,
    path: '/Home',
    navigationOptions: {
      tabBar: () => ({
        label: ' ',
        icon: ({ tintColor }) => (
          <Image
            source={Icons.home}
            style={styles.tabIcon}
          />
        ),
      }),
    },
  },
  ReadingTab: { screen: ReadingScreen },
  MusicTab: { screen: MusicScreen },
  MovieTab: { screen: MovieScreen },
});

const App = connect(state => ({
  nav: state.get('nav').toJS(),
}))(({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
));

export default App;
