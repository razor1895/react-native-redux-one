import React, {
  Component
} from 'react';
import {
  View,
  PixelRatio,
  StyleSheet,
  Text,
} from 'react-native';
import {
  NavigationActions,
  addNavigationHelpers,
  StackNavigator,
} from 'react-navigation';
import { connect } from 'react-redux';

import HomeScreen from './Home';
import ReadingScreen from './Reading';
import MusicScreen from './Music';
import MovieScreen from './Movie';

const ratio = PixelRatio.get() > 2 ? PixelRatio.get() : 3;

const AppNavigator = TabNavigator({
  HomeTab: {
    screen: HomeScreen,
    path: '/Home',
    navigationOptions: {
      tabBar: () => ({
        label: '首页',
        icon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-settings' : 'ios-settings-outline'}
            size={26}
            style={{ color: tintColor }}
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
