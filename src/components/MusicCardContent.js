import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  processColor,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MusicControl from 'react-native-music-control';
import Sound from 'react-native-sound';
import {
  HEART,
  HEART_FILL,
  SHARE,
  MUSIC_BACKGROUND,
  MUSIC_PLAY,
  XIAMI_LOGO,
  MUSIC_STORY,
} from '../images';
import { formatDate } from '../utils';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  musicGroup: {
    flexDirection: 'row',
    marginBottom: 10,
    position: 'relative',
  },
  musicBackground: {
    width,
    height: 200,
    position: 'relative',
    flexDirection: 'row'
  },
  musicStory: {
    height: 200,
    resizeMode: 'contain',
    position: 'absolute',
    right: 10,
  },
  copyright: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    marginBottom: 10,
    marginLeft: 20
  },
  cover: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    top: 0,
    left: 90,
    alignItems: 'center',
    justifyContent: 'center'
  },
  musicInfo: {
    color: '#b1b1b1',
    fontSize: 12,
    paddingLeft: 20,
    marginBottom: 9,
    width: width - 40
  },
});

export default class MusicCardContent extends Component {
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
      <View>
        <View style={styles.musicGroup}>
          <ImageBackground style={styles.musicBackground} source={MUSIC_BACKGROUND} >
            <Image style={styles.copyright} source={XIAMI_LOGO} />
            <Image
              style={styles.cover}
              source={{ uri: data.get('img_url') }}
            />
          </ImageBackground>
          <Image style={styles.musicStory} source={MUSIC_STORY} />
        </View>
        <Text
          style={styles.musicInfo}
          numberOfLines={1}
          ellipsizeMode={'tail'}
        >
          {data.get('music_name')} {data.get('audio_author')} | {data.get('audio_album')}
        </Text>
      </View>
    );
  }
}
