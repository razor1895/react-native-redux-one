import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  processColor,
  Image,
  ImageBackground
} from 'react-native';
import { heart, heartFill, share } from '../images';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  cardContainer: {
    width,
    marginTop: 22,
    paddingBottom: 15,
    backgroundColor: processColor('#fff'),
    marginBottom: 5,
  },
  picture: {
    width,
    height: 200,
    // resizeMode: 'stretch',
    marginBottom: 12,
  },
  volume: {
    position: 'absolute',
    color: '#dadada',
    left: 10,
    top: 5,
    backgroundColor: 'transparent',
    fontSize: 12,
  },
  title: {
    textAlign: 'center',
    color: '#999',
    fontWeight: '400',
    fontSize: 12,
    letterSpacing: 0.3,
    marginBottom: 24,
  },
  info: {
    alignSelf: 'center',
    width: 300,
    marginBottom: 24,
    fontSize: 14,
    color: '#333',
    fontWeight: '300',
    lineHeight: 25,
  },
  quoteAuthor: {
    textAlign: 'center',
    fontSize: 12,
    color: '#999',
    marginBottom: 25,
  },
  bottom: {
    flexDirection: 'row',
    width: width - 20,
    justifyContent: 'space-between'
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  category: {
    marginLeft: 20,
    color: '#888',
    fontSize: 12,
    alignSelf: 'center',
    fontWeight: '300'
  },
  heartsCount: {
    color: '#ddd',
    fontSize: 8.4,
    marginRight: 5,
  },
  heart: {
    width: 16,
    height: 16,
    resizeMode: 'contain'
  },
  circle: {
    width: 4,
    height: 4,
    borderRadius: 50,
    backgroundColor: '#e2e2e2',
    marginHorizontal: 20
  },
  share: {
    width: 14,
    height: 14,
    resizeMode: 'contain'
  }
});

export default class PictureCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageHeight: 200,
    };
  }

  componentDidMount() {
    if (this.props.data.get('img_url')) {
      this.getPictureSize(this.props.data.get('img_url'));
    }
  }

  getPictureSize = (uri) => {
    Image.getSize(uri, (imageWidth, imageHeight) => this.setState({ imageHeight: imageHeight * (width / imageWidth) }));
  }

  render() {
    const { data } = this.props;

    return (
      <View style={styles.cardContainer} id={data.get('id')}>
        <ImageBackground source={{ uri: data.get('img_url') }} style={[styles.picture, { height: this.state.imageHeight }]} >
          <Text style={styles.volume}>{data.get('volume')}</Text>
        </ImageBackground>
        <Text style={styles.title}>{data.get('title')} | {data.get('pic_info')}</Text>
        <Text style={styles.info}>{data.get('forward')}</Text>
        <Text style={styles.quoteAuthor}>{data.get('words_info')}</Text>
        <View style={styles.bottom}>
          <Text style={styles.category}>小记</Text>
          <View style={styles.buttonGroup}>
            <Text style={styles.heartsCount}>{data.get('like_count')}</Text>
            <Image style={styles.heart} source={heart} />
            <View style={styles.circle} />
            <Image style={styles.share} source={share} />
          </View>
        </View>
      </View>
    );
  }
}
