import { View, StatusBar, Platform } from 'react-native';
import PropTypes from 'prop-types';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const StatusBarEncapsulation = ({ backgroundColor, ...props }) => (
  <View style={[{ height: STATUSBAR_HEIGHT }, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

StatusBarEncapsulation.propTypes = {
  backgroundColor: PropTypes.string,
};

StatusBarEncapsulation.defaultProps = {
  backgroundColor: '#fff'
};
