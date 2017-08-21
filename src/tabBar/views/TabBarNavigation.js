// React
import React from 'react';
import { View } from 'react-native';
//Redux
import { connect } from 'react-redux';
// Navigation
import { addNavigationHelpers } from 'react-navigation';
import TabBar from '../navigationConfiguration';
import StatusBarEncapsulation from '../../components/StatusBarEncapsulation';

const containerStyle = { flex: 1 };

const TabBarNavigation = (props) => {
  // const { dispatch, navigationState } = props;
  return (
    <View style={containerStyle}>
      <StatusBarEncapsulation backgroundColor="#5E8D48" barStyle="light-content" hidden />
      <TabBar />
    </View>
  );
};

const mapStateToProps = state => ({
  // navigationState: state.get('tabBarNavigationState').toJS(),
});
export default connect(mapStateToProps)(TabBarNavigation);
