import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import MusicTabNavigator from '../navigationConfiguration';

class MusicTabNavigation extends Component {
  render() {
    // const { dispatch, navigationState } = this.props;
    return (
      <MusicTabNavigator />
    );
  }
}

const mapStateToProps = state => ({
  // navigationState: state.get('musicTabNavigationState').toJS()
});
export default connect(mapStateToProps)(MusicTabNavigation);
