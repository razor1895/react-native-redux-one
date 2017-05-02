import { StackNavigator } from 'react-navigation';

// Screens
import MusicTabList from './views/MusicTabList';
import MusicTabDetail from './views/MusicTabDetail';

const routeConfiguration = {
  MusicTabList: { screen: MusicTabList },
  MusicTabDetail: { screen: MusicTabDetail },
};
// going to disable the header for now

const stackNavigatorConfiguration = {
  initialRoute: 'MusicTabList'
};

export default StackNavigator(routeConfiguration, stackNavigatorConfiguration);
