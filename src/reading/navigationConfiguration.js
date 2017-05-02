import { StackNavigator } from 'react-navigation';

// Screens
import ReadingTabList from './views/ReadingTabList';
import ReadingTabDetail from './views/ReadingTabDetail';

const routeConfiguration = {
  ReadingTabList: { screen: ReadingTabList },
  ReadingTabDetail: { screen: ReadingTabDetail },
};

const stackNavigatorConfiguration = {
  initialRoute: 'ReadingTabList'
};

export default StackNavigator(routeConfiguration, stackNavigatorConfiguration);
