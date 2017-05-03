import React from 'react';
import { TabNavigator } from 'react-navigation';
import { StyleSheet, PixelRatio, Image } from 'react-native';
// Tab-View
import TabView from 'react-navigation/src/views/TabView/TabView';
// Tab-Navigators
import { HomeTabNavigation } from '../home';
import { ReadingTabNavigation } from '../reading';
import { MusicTabNavigation } from '../music';
import { MovieTabNavigation } from '../movie';
import * as Icon from '../images';

const ratio = PixelRatio.get() > 2 ? PixelRatio.get() : 3;
const styles = StyleSheet.create({
  tabIcon: {
    width: 80 / ratio,
    height: 80 / ratio,
    resizeMode: 'contain',
  }
});

const routeConfiguration = {
  home: {
    screen: HomeTabNavigation,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({ focused }) => (
        <Image
          source={focused ? Icon.homeActive : Icon.home}
          style={styles.tabIcon}
        />
      ),
    }
  },
  reading: {
    screen: ReadingTabNavigation,
    navigationOptions: {
      tabBarLabel: '阅读',
      tabBarIcon: ({ focused }) => (
        <Image
          source={focused ? Icon.readingActive : Icon.reading}
          style={styles.tabIcon}
        />
      ),
    }
  },
  music: {
    screen: MusicTabNavigation,
    navigationOptions: {
      tabBarLabel: '音乐',
      tabBarIcon: ({ focused }) => (
        <Image
          source={focused ? Icon.musicActive : Icon.music}
          style={styles.tabIcon}
        />
      ),
    }
  },
  movie: {
    screen: MovieTabNavigation,
    navigationOptions: {
      tabBarLabel: '影视',
      tabBarIcon: ({ focused }) => (
        <Image
          source={focused ? Icon.movieActive : Icon.movie}
          style={styles.tabIcon}
        />
      ),
    }
  }
};

const tabBarConfiguration = {
  // tabBarComponent: TabView.TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
  lazyLoad: true,
  tabBarOptions: {
    activeTintColor: '#8a8989',
    inactiveTintColor: '#a8a6a5',
  }
};

export default TabNavigator(routeConfiguration, tabBarConfiguration);


