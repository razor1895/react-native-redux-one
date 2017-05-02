import React, { Component, PropTypes } from 'react';
// import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import ReadingTabNavigator from '../navigationConfiguration';

class readingTabNavigation extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    return (
      <ReadingTabNavigator />
    );
  }
}

const mapStateToProps = state => ({
  reading: {}
});
export default connect(mapStateToProps)(readingTabNavigation);
