import { StackNavigator } from 'react-navigation';

// Screens
import HomeFeeds from './views/HomeFeeds';
import HomeFeedsDetail from './views/HomeFeedsDetail';

const routeConfiguration = {
  HomeFeeds: { screen: HomeFeeds },
  HomeFeedsDetail: { screen: HomeFeedsDetail },
};
// going to disable the header for now

const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRoute: 'HomeFeeds'
};

export default StackNavigator(routeConfiguration, stackNavigatorConfiguration);
