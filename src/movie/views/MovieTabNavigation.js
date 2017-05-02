import React, { Component } from 'react';
// import { addNavigationHelpers } from 'react-navigation';
import MovieTabNavigator from '../navigationConfiguration';
import connect from '../../connnectComponent';

class MovieTabNavigation extends Component {
  render() {
    // const { dispatch, navigationState } = this.props;
    return (
      <MovieTabNavigator />
    );
  }
}

const mapStateToProps = state => ({
  // navigationState: state.get('movieTabNavigationState').toJS()
});
export default connect({ mapStateToProps, LayoutComponent: MovieTabNavigation });
