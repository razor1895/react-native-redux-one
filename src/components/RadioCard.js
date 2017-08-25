import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import GifIcon from './GifIcon';
import { HEART, HEART_FILL, SHARE, RADIO_LOGO, FEEDS_RADIO_PLAY, FEEDS_RADIO_PAUSE } from '../images';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    height: 240,
    width,
    position: 'relative'
  },
  radioLayer: {
    position: 'absolute',
    left: 0,
    top: 0,
    width,
    height: 240,
    zIndex: 10,
  },
  radioLogo: {
    position: 'absolute',
    left: 20,
    top: 16,
    width: 30,
    height: 35,
    resizeMode: 'cover',
    zIndex: 12
  },
  background: {
    position: 'absolute',
    left: 0,
    top: 0,
    width,
    height: 240,
    resizeMode: 'cover',
  },
  fmInfo: {
    position: 'absolute',
    left: 20,
    height: 45,
    width,
    bottom: 65,
    zIndex: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  actionIcon: {
    width: 32,
    height: 32,
    resizeMode: 'cover',
    marginRight: 12,
  },
  titleInfo: {
    position: 'absolute',
    bottom: 58,
    width,
    alignItems: 'center'
  },
  smallTitle: {
    fontSize: 12,
    color: '#a6a6a6'
  },
  volume: {
    fontSize: 12,
    backgroundColor: 'transparent',
    color: '#fff',
    marginBottom: 14
  },
  title: {
    fontSize: 18,
    backgroundColor: 'transparent',
    color: '#fff'
  },
  cardFooter: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#666',
    height: 40,
    width,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    zIndex: 12,
  },
  heartsCount: {
    color: '#a6a6a6',
    fontSize: 10,
    marginRight: 5,
    alignSelf: 'flex-start',
    position: 'relative',
    top: 8,
    marginLeft: 2,
    width: 30,
    backgroundColor: 'transparent'
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
    color: '#a6a6a6',
    fontSize: 12,
    backgroundColor: 'transparent'
  },
  iconContainer: {
    justifyContent: 'center'
  },
  playIcon: {
    width: 20,
    height: 20,
    resizeMode: 'cover'
  }
});

export default class RadioCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      playing: false,
    };
  }

  toggleLike = () => {
    this.setState({ liked: !this.state.liked });
  }

  toggleRadioPlayStatus = () => {
    this.setState({ playing: !this.state.playing });
  }

  render() {
    const { data } = this.props;

    return (
      <View style={styles.container}>
        {
          data.get('volume') ? (
            <LinearGradient
              start={{ x: 0.0, y: 0.0 }}
              locations={[0.0, 1.0]}
              end={{ x: 0.0, y: 1.0 }}
              colors={['rgba(0,0,0,.2)', 'rgba(0,0,0,.5)']}
              style={styles.radioLayer}
            />
          ) : null
        }
        <Image style={styles.background} source={{ uri: data.get('img_url') }} />
        <Image style={styles.radioLogo} source={RADIO_LOGO} />
        <View style={data.get('volume') ? styles.fmInfo : styles.titleInfo}>
          {
            data.get('volume') ? (
              <TouchableWithoutFeedback onPress={this.toggleRadioPlayStatus}>
                <Image
                  source={this.state.playing ? FEEDS_RADIO_PAUSE : FEEDS_RADIO_PLAY}
                  style={styles.actionIcon}
                />
              </TouchableWithoutFeedback>
            ) : null
          }
          <View>
            <Text style={styles.volume}>{data.get('volume')}</Text>
            <Text style={[styles.title, !data.get('volume') && styles.smallTitle]}>{data.get('title')}</Text>
          </View>
        </View>
        <View style={styles.cardFooter}>
          {
            data.get('volume') ? (
              <View style={styles.authorInfo}>
                <Image style={styles.avatar} source={{ uri: data.get('author').get('web_url') }} />
                <Text style={styles.author}>{data.get('author').get('user_name')}</Text>
              </View>
            ) : (
              <TouchableOpacity onPress={this.toggleRadioPlayStatus} style={styles.iconContainer}>
                <GifIcon
                  icon={'VOICE_FM_0'}
                  startNum={0}
                  endNum={2}
                  playing={this.state.playing}
                  style={styles.playIcon}
                />
              </TouchableOpacity>
            )
          }
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
