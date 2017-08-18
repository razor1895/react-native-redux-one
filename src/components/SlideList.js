import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 5,
    paddingVertical: 13,
  },
  labelText: {
    color: 'rgb(160,160,160)',
    fontSize: 14,
  }
});

class SlideList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listHeight: 40,
    };
  }

  render() {
    return (
      <View style={[styles.container, { height: this.state.listHeight }]}>
        <Text style={styles.labelText}>
          一个 VOL.{this.props.data.get('vol')}
        </Text>
      </View>
    );
  }
}

export default SlideList;
