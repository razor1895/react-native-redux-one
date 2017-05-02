import Immutable from 'immutable';
import { ReadingTabNavigator } from '../reading';

const initialState = Immutable.fromJS({
  index: 0,
  routes: [{
    routeName: 'ReadingTabList',
    key: 'Init'
  }]
});

export default (state = initialState, action) => state.merge(
  ReadingTabNavigator.router.getStateForAction(action, state.toJS())
);
