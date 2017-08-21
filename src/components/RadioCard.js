import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';

import { HEART, HEART_FILL, SHARE } from '../images';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    height: 240,
    width,
    position: 'relative'
  },
  background: {
    position: 'absolute',
    left: 0,
    top: 0,
    width,
    height: 240,
    resizeMode: 'cover'
  },
  fmInfo: {
    paddingLeft: 20,
  },
  volume: {
    backgroundColor: 'transparent',
    color: '#fff',
  },
  title: {
    backgroundColor: 'transparent',
    color: '#fff'
  },
  cardFooter: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#eee',
    height: 40,
    backgroundColor: 'rgba(0,0,0,.3)',
    width,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  heartsCount: {
    color: '#a7a7a7',
    fontSize: 10,
    marginRight: 5,
    alignSelf: 'flex-start',
    position: 'relative',
    top: 8,
    marginLeft: 2,
    width: 30
  },
  heart: {
    width: 16,
    height: 16,
    resizeMode: 'cover'
  },
  share: {
    width: 16,
    height: 16,
    resizeMode: 'cover'
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  authorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 12,
  },
  author: {
    color: '#a7a7a7',
    fontSize: 12,
  }
});

export default class RadioCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false
    };
  }

  toggleLike = () => {
    this.setState({ liked: !this.state.liked });
  }

  render() {
    const { data } = this.props;

    return (
      <View style={styles.container}>
        <Image style={styles.background} source={{ uri: data.get('img_url') }} />
        <View style={styles.fmInfo}>
          <Text style={styles.volume}>{data.get('volume')}</Text>
          <Text style={styles.title}>{data.get('title')}</Text>
        </View>
        <View style={styles.cardFooter}>
          <View style={styles.authorInfo}>
            <Image style={styles.avatar} source={{ uri: data.get('author').get('web_url') }} />
            <Text style={styles.author}>{data.get('author').get('user_name')}</Text>
          </View>
          <View style={styles.buttonGroup}>
            <TouchableOpacity onPress={this.toggleLike}>
              <Image style={styles.heart} source={this.state.liked ? HEART_FILL : HEART} />
            </TouchableOpacity>
            <Text style={styles.heartsCount}>{data.get('like_count')}</Text>
            <Image style={styles.share} source={SHARE} />
          </View>
        </View>
      </View>
    );
  }
}
