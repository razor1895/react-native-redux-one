import React from 'react';
import { View, StatusBar, Platform } from 'react-native';
import PropTypes from 'prop-types';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const StatusBarEncapsulation = ({ backgroundColor, ...props }) => {
  if (!props.hidden) {
    return (
      <View style={[{ height: STATUSBAR_HEIGHT }, { backgroundColor }]}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </View>
    );
  }

  return <StatusBar hidden />;
};

StatusBarEncapsulation.propTypes = {
  backgroundColor: PropTypes.string,
  hidden: PropTypes.bool.isRequired
};

StatusBarEncapsulation.defaultProps = {
  backgroundColor: '#fff'
};

export default StatusBarEncapsulation;
