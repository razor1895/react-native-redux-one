// React
import React from 'react';
//Redux
import { connect } from 'react-redux';
// Navigation
import { addNavigationHelpers } from 'react-navigation';
import TabBar from '../navigationConfiguration';

const TabBarNavigation = (props) => {
  // const { dispatch, navigationState } = props;
  return (
    <TabBar />
  );
};

const mapStateToProps = state => ({
  // navigationState: state.get('tabBarNavigationState').toJS(),
});
export default connect(mapStateToProps)(TabBarNavigation);
