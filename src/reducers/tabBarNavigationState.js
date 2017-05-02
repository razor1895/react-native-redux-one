import Immutable from 'immutable';
import TabBarNavigator from '../tabBar/navigationConfiguration';

const initialState = Immutable.fromJS({
  index: 0,
  routes: [{
    routeName: 'home',
    key: 'home'
  }, {
    routeName: 'reading',
    key: 'reading'
  }, {
    routeName: 'music',
    key: 'music'
  }, {
    routeName: 'movie',
    key: 'movie'
  }]
});

export default (state = initialState, action) => state.merge(
  TabBarNavigator.router.getStateForAction(action, state.toJS())
);
