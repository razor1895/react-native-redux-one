import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  processColor,
  Image
} from 'react-native';
import { heart, heartFilled, share, movieBackground } from '../images';

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
    paddingLeft: 30,
    marginBottom: 15,
    color: '#393939',
    fontWeight: '400',
    fontSize: 18,
    width: width - 70,
    letterSpacing: 0.3,
    lineHeight: 20
  },
  info: {
    paddingLeft: 30,
    fontSize: 13,
    color: '#9a9a9a',
    letterSpacing: 0.5,
    fontWeight: '300'
  },
  movieBackground: {
    width,
    height: 240,
    resizeMode: 'stretch',
    alignItems: 'center',
    position: 'relative'
  },
  image: {
    position: 'absolute',
    top: 35,
    width: width - 20,
    height: 170,
    resizeMode: 'stretch',
    borderRadius: 5
  },
  brief: {
    paddingLeft: 30,
    width: 280,
    fontSize: 12,
    fontWeight: '300',
    lineHeight: 17,
    color: '#adadad',
    marginBottom: 10
  },
  movieName: {
    textAlign: 'right',
    width: width - 20,
    fontSize: 12,
    fontWeight: '300',
    color: '#adadad',
    marginBottom: 15
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
    marginLeft: 10,
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

export default props => (
  <View style={styles.cardContainer}>
    <Text style={styles.label}>- {props.data} -</Text>
    <Text style={styles.title}>我敢说，每个追「人民名义」的人都会迷上这部高分新剧</Text>
    <Text style={styles.info}>文 / 鱼叔</Text>
    <Image style={styles.movieBackground} source={movieBackground} >
      <Image style={styles.image} source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493657959565&di=fc7d7c7914a51d7bd8160dd62039ef14&imgtype=0&src=http%3A%2F%2Fn1image.hjfile.cn%2Fmh%2F2017%2F04%2F14%2F83fec2188d16b72999948029c30dd2bb.png' }} />
    </Image>
    <Text style={styles.brief}>警察版《半泽直树》来了，卡司强到刺眼睛。</Text>
    <Text style={styles.movieName}>——《小小的巨人》</Text>
    <View style={styles.bottom}>
      <Text style={styles.time}>15小时前</Text>
      <View style={styles.buttonGroup}>
        <Text style={styles.heartsCount}>96</Text>
        <Image style={styles.heart} source={heart} />
        <View style={styles.circle} />
        <Image style={styles.share} source={share} />
      </View>
    </View>
  </View>
);
