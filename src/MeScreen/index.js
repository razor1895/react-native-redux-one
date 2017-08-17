import { StackNavigator } from 'react-navigation';

// Screens
import Me from './views/Me';

const routeConfiguration = {
  Me: { screen: Me },
};
// going to disable the header for now

const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRoute: 'Me'
};

export default StackNavigator(routeConfiguration, stackNavigatorConfiguration);
