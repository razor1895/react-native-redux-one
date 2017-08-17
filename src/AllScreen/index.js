import { StackNavigator } from 'react-navigation';

// Screens
import AllScreenFeeds from './views/AllScreenFeeds';
import AllScreenFeedsDetail from './views/AllScreenFeedsDetail';

const routeConfiguration = {
  AllScreenFeeds: { screen: AllScreenFeeds },
  AllScreenFeedsDetail: { screen: AllScreenFeedsDetail },
};
// going to disable the header for now

const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRoute: 'AllScreenFeeds'
};

export default StackNavigator(routeConfiguration, stackNavigatorConfiguration);
