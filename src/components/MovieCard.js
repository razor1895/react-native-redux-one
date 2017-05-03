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

export default ({ data }) => (
  <View style={styles.cardContainer} id={data.get('id')}>
    <Text style={styles.label}>- {data.get('tag_list').size === 0 ? '影视' : data.get('tag_list').get(0).get('title')} -</Text>
    <Text style={styles.title}>{ data.get('title') }</Text>
    <Text style={styles.info}>文 / {data.get('author').get('user_name')}</Text>
    <Image style={styles.movieBackground} source={movieBackground} >
      <Image style={styles.image} source={{ uri: data.get('img_url') }} />
    </Image>
    <Text style={styles.brief}>{data.get('forward')}</Text>
    <Text style={styles.movieName}>——《{data.get('subtitle').split(':')[1]}》</Text>
    <View style={styles.bottom}>
      <Text style={styles.time}>{formatDate(data.get('post_date'))}</Text>
      <View style={styles.buttonGroup}>
        <Text style={styles.heartsCount}>{data.get('like_count')}</Text>
        <Image style={styles.heart} source={heart} />
        <View style={styles.circle} />
        <Image style={styles.share} source={share} />
      </View>
    </View>
  </View>
);
