import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  processColor,
  Image,
  TouchableOpacity
} from 'react-native';
import { HEART, HEART_FILL, SHARE, DIARY, COLLECT, COLLECTED } from '../images';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  cardContainer: {
    width,
    backgroundColor: processColor('#fff'),
    marginBottom: 5,
  },
  picture: {
    width,
    height: 200,
    // resizeMode: 'stretch',
    marginBottom: 12,
  },
  title: {
    textAlign: 'center',
    color: '#a6a6a6',
    fontSize: 12,
    letterSpacing: 0.3,
    marginBottom: 20,
  },
  info: {
    alignSelf: 'center',
    width: 300,
    marginBottom: 23,
    fontSize: 14,
    color: '#666',
    lineHeight: 30,
  },
  quoteAuthor: {
    textAlign: 'center',
    fontSize: 12,
    color: '#a6a6a6',
  },
  bottom: {
    flexDirection: 'row',
    width: width - 20,
    justifyContent: 'space-between',
    height: 40,
    marginTop: 29,
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  category: {
    color: '#a6a6a6',
    fontSize: 12,
    alignSelf: 'center',
  },
  diary: {
    marginLeft: 20,
    width: 16,
    height: 16,
    resizeMode: 'cover',
    marginRight: 5
  },
  heartsCount: {
    color: '#a6a6a6',
    fontSize: 10,
    marginRight: 5,
    alignSelf: 'flex-start',
    position: 'absolute',
    top: -5,
    left: 18,
    width: 30
  },
  heart: {
    width: 16,
    height: 16,
    resizeMode: 'cover'
  },
  collect: {
    width: 16,
    height: 16,
    resizeMode: 'cover'
  },
  share: {
    width: 16,
    height: 16,
    resizeMode: 'cover'
  },
  operationGroup: {
    width: 124,
    justifyContent: 'space-between',
    position: 'relative'
  }
});

export default class PictureCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageHeight: 200,
      liked: false,
      collected: false
    };
  }

  componentDidMount() {
    if (this.props.data.get('img_url')) {
      this.getPictureSize(this.props.data.get('img_url'));
    }
  }

  getPictureSize = (uri) => {
    Image.getSize(uri, (imageWidth, imageHeight) =>
      this.setState({ imageHeight: imageHeight * (width / imageWidth) }));
  }

  toggleLike = () => {
    this.setState({ liked: !this.state.liked });
  }

  toggleCollect = () => {
    this.setState({ collected: !this.state.collected });
  }

  render() {
    const { data } = this.props;

    return (
      <View style={styles.cardContainer} id={data.get('id')}>
        <Image source={{ uri: data.get('img_url') }} style={[styles.picture, { height: this.state.imageHeight }]} />
        <Text style={styles.title}>{data.get('title')} | {data.get('pic_info')}</Text>
        <Text style={styles.info}>{data.get('forward')}</Text>
        <Text style={styles.quoteAuthor}>{data.get('words_info')}</Text>
        <View style={styles.bottom}>
          <View style={styles.buttonGroup}>
            <Image style={styles.diary} source={DIARY} />
            <Text style={styles.category}>小记</Text>
          </View>
          <View style={[styles.buttonGroup, styles.operationGroup]}>
            <TouchableOpacity onPress={this.toggleLike}>
              <Image style={styles.heart} source={this.state.liked ? HEART_FILL : HEART} />
              <Text style={styles.heartsCount}>{data.get('like_count')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.toggleCollect}>
              <Image style={styles.collect} source={this.state.collected ? COLLECTED : COLLECT} />
            </TouchableOpacity>
            <Image style={styles.share} source={SHARE} />
          </View>
        </View>
      </View>
    );
  }
}
