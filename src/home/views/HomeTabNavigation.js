import React, { Component } from 'react';
// import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import HomeTabNavigator from '../navigationConfiguration';

class HomeTabNavigation extends Component {
  render() {
    // const { dispatch, navigationState } = this.props;
    return (
      <HomeTabNavigator />
    );
  }
}

const mapStateToProps = state => ({
  // navigationState: state.get('homeTabNavigationState').toJS()
});
export default connect(mapStateToProps)(HomeTabNavigation);
