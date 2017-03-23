import React from 'react';
import {
  PixelRatio,
  StyleSheet,
  Image
} from 'react-native';
import {
  addNavigationHelpers,
  TabNavigator,
} from 'react-navigation';
import { connect } from 'react-redux';
import TabView from 'react-navigation/lib/views/TabView/TabView';

import HomeScreen from './Home';
import ReadingScreen from './Reading';
import MusicScreen from './Music';
import MovieScreen from './Movie';
import * as Icons from '../images/Icon';

const ratio = PixelRatio.get() > 2 ? PixelRatio.get() : 3;
const styles = StyleSheet.create({
  tabIcon: {
    width: 80 / ratio,
    height: 80 / ratio,
    resizeMode: 'contain'
  },
});

export const AppNavigator = TabNavigator({
  HomeTab: {
    screen: HomeScreen,
    header: {
      title: '123'
    },
    navigationOptions: {
      tabBar: () => ({
        label: '首页',
        icon: ({ focused }) => (
          <Image
            source={focused ? Icons.homeActive : Icons.home}
            style={styles.tabIcon}
          />
        ),
      }),
    },
  },
  ReadingTab: {
    screen: ReadingScreen,
    navigationOptions: {
      tabBar: () => ({
        label: '阅读',
        icon: ({ focused }) => (
          <Image
            source={focused ? Icons.readingActive : Icons.reading}
            style={styles.tabIcon}
          />
        ),
      }),
    },
  },
  MusicTab: {
    screen: MusicScreen,
    navigationOptions: {
      tabBar: () => ({
        label: '音乐',
        icon: ({ focused }) => (
          <Image
            source={focused ? Icons.musicActive : Icons.music}
            style={styles.tabIcon}
          />
        ),
      }),
    },
  },
  MovieTab: {
    screen: MovieScreen,
    navigationOptions: {
      tabBar: () => ({
        label: '电影',
        icon: ({ focused }) => (
          <Image
            source={focused ? Icons.movieActive : Icons.movie}
            style={styles.tabIcon}
          />
        ),
      }),
    },
  },
}, {
  tabBarComponent: TabView.TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
  lazyLoad: true,
  tabBarOptions: {
    activeTintColor: '#8a8989',
    inactiveTintColor: '#a8a6a5'
  }
});

export const App = connect(state => ({
  nav: state.get('nav'),
}))(({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
));
