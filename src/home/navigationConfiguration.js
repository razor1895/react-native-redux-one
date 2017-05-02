import { StackNavigator } from 'react-navigation';

// Screens
import HomeTabList from './views/HomeTabList';
import HomeTabDetail from './views/HomeTabDetail';

const routeConfiguration = {
  HomeTabList: { screen: HomeTabList },
  HomeTabDetail: { screen: HomeTabDetail },
};
// going to disable the header for now

const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRoute: 'HomeTabList'
};

export default StackNavigator(routeConfiguration, stackNavigatorConfiguration);
