import Immutable from 'immutable';
import { HomeTabNavigator } from '../home';

const initialState = Immutable.fromJS({
  index: 0,
  routes: [{
    routeName: 'HomeTabList',
    key: 'Init'
  }]
});

export default (state = initialState, action) => state.merge(
  HomeTabNavigator.router.getStateForAction(action, state.toJS())
);
