import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  processColor,
  Image
} from 'react-native';
import {
  heart,
  heartFilled,
  share,
  musicBackground,
  musicStory,
  musicPlay,
  xiamiCopyright,
} from '../images';

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
    fontSize: 8.4,
    paddingLeft: 40,
    marginBottom: 15,
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

export default props => (
  <View style={styles.cardContainer}>
    <Text style={styles.label}>- {props.data} -</Text>
    <Text style={styles.title}>大多数人都相同，喜欢的只是爱情的脸孔</Text>
    <Text style={styles.info}>文 / 阿芙拉</Text>
    <View style={styles.musicGroup}>
      <Image style={styles.musicBackground} source={musicBackground} >
        <Image style={styles.copyright} source={xiamiCopyright}/>
        <Image style={styles.cover} source={{ uri: 'https://imgsa.baidu.com/baike/crop%3D0%2C0%2C1024%2C676%3Bc0%3Dbaike116%2C5%2C5%2C116%2C38/sign=67afe829e3c4b74520dbed56f2cc3227/9345d688d43f8794c938262eda1b0ef41ad53aee.jpg' }} >
          <Image style={styles.playerBtn} source={musicPlay} />
        </Image>
      </Image>
      <Image style={styles.musicStory} source={musicStory} />
    </View>
    <Text style={styles.musicInfo}>无底洞 蔡健雅 | 幸福的天空2-我很想你</Text>
    <Text style={styles.brief}>开心时懂得提醒自己不要忘形，受伤时亦会反省自己是否有错。</Text>
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
