import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  processColor,
  Image
} from 'react-native';
import { heart, heartFilled, share } from '../images';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  cardContainer: {
    width,
    padding: 10,
    paddingBottom: 15,
    backgroundColor: processColor('#fff'),
    marginBottom: 10,
  },
  label: {
    color: '#8a8a8a',
    textAlign: 'center',
    fontSize: 10,
    marginBottom: 20,
    fontWeight: '200',
  },
  title: {
    paddingLeft: 20,
    marginBottom: 15,
    color: '#393939',
    fontWeight: '400',
    fontSize: 18,
    width: width - 70,
    letterSpacing: 0.3,
    lineHeight: 20
  },
  info: {
    paddingLeft: 20,
    marginBottom: 20,
    fontSize: 13,
    color: '#9a9a9a',
    letterSpacing: 0.5,
    fontWeight: '300'
  },
  image: {
    width: width - 20,
    height: 170,
    resizeMode: 'cover',
    marginBottom: 15,
  },
  brief: {
    paddingLeft: 20,
    width: 280,
    fontSize: 12,
    fontWeight: '300',
    lineHeight: 17,
    color: '#adadad',
    marginBottom: 20
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
    <Text style={styles.title}>跟女博士学看色情片</Text>
    <Text style={styles.info}>文 / 每日人物</Text>
    <Image style={styles.image} source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493642937766&di=3fc67ff7c6fc3e88525055b9e531385b&imgtype=0&src=http%3A%2F%2Fcdn01.wallconvert.com%2F_media%2Fwallpapers_2560x1600%2F1%2F2%2Fnew-york-city-15116.jpg' }} />
    <Text style={styles.brief} numberOfLines={2}>认识和了解身体只是最基本的，接纳和喜爱自己、学会取悦自己才是最终的目的</Text>
    <View style={styles.bottom}>
      <Text style={styles.time}>12小时前</Text>
      <View style={styles.buttonGroup}>
        <Text style={styles.heartsCount}>275</Text>
        <Image style={styles.heart} source={heart} />
        <View style={styles.circle} />
        <Image style={styles.share} source={share} />
      </View>
    </View>
  </View>
);
