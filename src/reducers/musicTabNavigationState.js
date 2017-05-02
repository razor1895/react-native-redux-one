import Immutable from 'immutable';
import { MusicTabNavigator } from '../music';

const initialState = Immutable.fromJS({
  index: 0,
  routes: [{
    routeName: 'MusicTabList',
    key: 'Init'
  }]
});

export default (state = initialState, action) => state.merge(
  MusicTabNavigator.router.getStateForAction(action, state.toJS())
);
