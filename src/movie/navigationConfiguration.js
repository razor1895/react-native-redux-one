import { StackNavigator } from 'react-navigation';

// Screens
import MovieTabList from './views/MovieTabList';
import MovieTabDetail from './views/MovieTabDetail';

const routeConfiguration = {
  MovieTabList: { screen: MovieTabList },
  MovieTabDetail: { screen: MovieTabDetail },
};
// going to disable the header for now

const stackNavigatorConfiguration = {
  initialRoute: 'MovieTabList'
};

export default StackNavigator(routeConfiguration, stackNavigatorConfiguration);
