import { AppNavigator } from '../containers/App';

export default (state, action) => AppNavigator.router.getStateForAction(action, state);

