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
import * as Animatable from 'react-native-animatable';
import MusicControl from 'react-native-music-control';
import Sound from 'react-native-sound';
import {
  heart,
  heartFilled,
  share,
  musicBackground,
  musicStory,
  musicPlay,
  xiamiCopyright,
} from '../images';
import { formatDate } from '../utils';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  cardContainer: {
    width,
    paddingBottom: 15,
    backgroundColor: processColor('#fff'),
    marginBottom: 10,
  },
  label: {
    color: '#8a8a8a',
    textAlign: 'center',
    fontSize: 10,
    marginTop: 10,
    marginBottom: 20,
    fontWeight: '200',
  },
  title: {
    paddingLeft: 40,
    marginBottom: 15,
    color: '#393939',
    fontWeight: '400',
    fontSize: 18,
    width: width - 50,
    letterSpacing: 3,
    lineHeight: 20
  },
  info: {
    paddingLeft: 40,
    fontSize: 13,
    color: '#9a9a9a',
    letterSpacing: 0.5,
    fontWeight: '300',
    marginBottom: 10
  },
  musicGroup: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  musicBackground: {
    width: width * 0.8,
    height: 220,
    resizeMode: 'stretch',
    position: 'relative',
    flexDirection: 'row'
  },
  musicStory: {
    width: width * 0.2,
    height: 210,
    resizeMode: 'stretch',
  },
  copyright: {
    width: 21,
    height: 21,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    marginBottom: 15,
    marginLeft: 40
  },
  cover: {
    position: 'absolute',
    width: 185,
    height: 180,
    resizeMode: 'stretch',
    borderRadius: 92.5,
    top: 20,
    right: 18,
    alignItems: 'center',
    justifyContent: 'center'
  },
  playerBtn: {
    width: 33,
    height: 33,
    borderRadius: 17.5,
    backgroundColor: 'rgba(198,192,185,0.8)',
    resizeMode: 'stretch',
  },
  brief: {
    paddingLeft: 40,
    width: 300,
    fontSize: 12,
    fontWeight: '300',
    lineHeight: 17,
    color: '#adadad',
    marginBottom: 10
  },
  musicInfo: {
    color: '#ddd',
    fontSize: 10,
    paddingLeft: 40,
    marginBottom: 15,
    width: width - 55
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
  time: {
    marginLeft: 30,
    color: '#ddd',
    fontSize: 8.4,
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

export default class MusicCard extends Component {
  constructor(props) {
    super(props);
    Sound.setCategory('Ambient', true);

    this.state = {
      loopingSound: undefined,
      nowPlaying: undefined,
      soundStatus: undefined,
    };
  }

  componentWillReceiveProps(nextProps) {
    const songId = this.props.data.get('audio_url');
    const nowPlaying = this.props.nowPlaying;
    const nextPlay = nextProps.nowPlaying;
    if (songId === '1771222880') {
      console.info(`SONG_ID: ${songId}`);
      console.info(`nowPlaying: ${nowPlaying}`);
      console.info(`nextPlay: ${nextPlay}`);
      console.info('stateNowPlaying', this.state.nowPlaying);
    }

    if (this.state.nowPlaying === nowPlaying && nowPlaying !== nextPlay) {
      console.log(true);
      this.stopMusic();
    }

    if (!this.state.nowPlaying && nowPlaying !== nextPlay && nextPlay === songId) {
      this.playMusic(nextProps.songUrls.get(songId), songId);
    }
  }

  playMusic(urlPath, songId) {
    if (this.state.loopingSound) {
      this.state.loopingSound.play();

      MusicControl.updatePlayback({
        state: MusicControl.STATE_PLAYING,
        elapsedTime: this.state.loopingSound.getCurrentTime(),
      });
      this.setState({ soundStatus: 'playing' });
      return;
    }

    const s = new Sound(urlPath, '', (e) => {
      if (e) {
        console.log('error', e);
      }
      s.setNumberOfLoops(-1);
      s.play();

      MusicControl.enableBackgroundMode(true);
      MusicControl.enableControl('nextTrack', true);
      MusicControl.enableControl('previousTrack', true);
      MusicControl.on('play', () => { this.playMusic(); });
      MusicControl.on('pause', () => { this.pauseMusic(); });
      MusicControl.on('nextTrack', () => {});
      MusicControl.on('previousTrack', () => {});

      MusicControl.setNowPlaying({
        title: this.props.data.get('music_name'),
        artwork: this.props.data.get('img_url'),
        artist: this.props.data.get('audio_author'),
        album: this.props.data.get('audio_album'),
        duration: s.getDuration(),
      });
    });

    MusicControl.enableControl('play', false);
    MusicControl.enableControl('pause', true);
    this.setState({ loopingSound: s, nowPlaying: songId, soundStatus: 'playing' });
  }

  pauseMusic = () => {
    this.state.loopingSound.pause();
    MusicControl.enableControl('play', false);
    MusicControl.enableControl('pause', true);
    this.setState({ soundStatus: 'paused' });
  }

  stopMusic = () => {
    if (!this.state.loopingSound) {
      return;
    }

    this.state.loopingSound.stop().release();
    MusicControl.resetNowPlaying();
    this.setState({ loopingSound: null, nowPlaying: undefined, soundStatus: undefined });
  };

  playerBtnPressed() {
    if (!this.state.loopingSound) {
      this.props.requestPlayableSongUrl(this.props.data.get('audio_url'));
    } else if (this.state.loopingSound && this.state.soundStatus === 'playing') {
      this.pauseMusic();
    } else {
      this.playMusic();
    }
  }

  render() {
    const { data, requestPlayableSongUrl, stopSingleSong } = this.props;

    return (
      <View style={styles.cardContainer}>
        <Text style={styles.label}>- {data.get('tag_list').size === 0 ? '音乐' : data.get('tag_list').get(0).get('title')} -</Text>
        <Text style={styles.title}>{data.get('title')}</Text>
        <Text style={styles.info}>文 / {data.get('author').get('user_name')}</Text>
        <View style={styles.musicGroup}>
          <Image style={styles.musicBackground} source={musicBackground} >
            <Image style={styles.copyright} source={xiamiCopyright} />
            <Animatable.Image
              style={styles.cover}
              source={{ uri: data.get('img_url') }}
              animation="rotate"
              iterationCount="infinite"
              easing="linear"
              duration={10000}
            >
              <TouchableOpacity onPress={() => this.playerBtnPressed()}>
                <Image style={styles.playerBtn} source={musicPlay} />
              </TouchableOpacity>
            </Animatable.Image>
          </Image>
          <Image style={styles.musicStory} source={musicStory} />
        </View>
        <Text
          style={styles.musicInfo}
          numberOfLines={1}
          ellipsizeMode={'tail'}
        >
          {data.get('music_name')} {data.get('audio_author')} | {data.get('audio_album')}
        </Text>
        <Text style={styles.brief}>{data.get('forward')}</Text>
        <View style={styles.bottom}>
          <Text style={styles.time}>{ formatDate(data.get('post_date')) }</Text>
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
