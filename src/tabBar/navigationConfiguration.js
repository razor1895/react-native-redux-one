import React from 'react';
import { TabNavigator } from 'react-navigation';
import { StyleSheet, PixelRatio, Image } from 'react-native';
// Tab-View
import TabBarBottom from 'react-navigation/src/views/TabView/TabBarBottom';
// Tab-Navigators
import HomeScreen from '../HomeScreen';
import AllScreen from '../AllScreen';
import MeScreen from '../MeScreen';
import * as Icon from '../images';

const styles = StyleSheet.create({
  tabIcon: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  }
});

const routeConfiguration = {
  home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <Image
          source={focused ? Icon.ONE_FILL : Icon.ONE}
          style={styles.tabIcon}
        />
      ),
    }
  },
  all: {
    screen: AllScreen,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <Image
          source={focused ? Icon.ALL_FILL : Icon.ALL}
          style={styles.tabIcon}
        />
      ),
    }
  },
  me: {
    screen: MeScreen,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <Image
          source={focused ? Icon.ME_FILL : Icon.ME}
          style={styles.tabIcon}
        />
      ),
    }
  },
};

const tabBarConfiguration = {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
  lazy: true,
  tabBarOptions: {
    activeTintColor: '#8a8989',
    inactiveTintColor: '#a8a6a5',
    showLabel: false,
    style: {
      backgroundColor: 'rgb(246, 246, 246)',
    }
  }
};

export default TabNavigator(routeConfiguration, tabBarConfiguration);

