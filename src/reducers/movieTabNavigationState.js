import Immutable from 'immutable';
import { MovieTabNavigator } from '../movie';

const initialState = Immutable.fromJS({
  index: 0,
  routes: [{
    routeName: 'MovieTabList',
    key: 'Init'
  }]
});

export default (state = initialState, action) => state.merge(
  MovieTabNavigator.router.getStateForAction(action, state.toJS())
);
