import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  processColor,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import { heart, heartFilled, share } from '../images';
import { formatDate } from '../utils';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  image: {
    width: width - 40,
    resizeMode: 'cover',
    alignSelf: 'center'
    // marginBottom: 15,
  },
});

export default class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImageHeight: 170,
    };
  }

  componentDidMount() {
    Image.getSize(this.props.data.get('img_url'), (w, h) => {
      const ratio = (width - 40) / w;
      const backgroundImageHeight = h * ratio;
      this.setState({ backgroundImageHeight });
    });
  }

  render() {
    const { data, source, navigation } = this.props;

    return (
      <View>
        <Image style={[styles.image, { height: this.state.backgroundImageHeight }]} source={{ uri: data.get('img_url') }} />
      </View>
    );
  }
};

