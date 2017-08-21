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

import { HEART, HEART_FILL, SHARE } from '../images';
import { formatDate } from '../utils';
import MusicCardContent from './MusicCardContent';
import StoryCardContent from './StoryCardContent';
import MovieCardContent from './MovieCardContent';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  cardContainer: {
    width,
    paddingBottom: 15,
    backgroundColor: processColor('#fff'),
    marginBottom: 5,
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
    paddingLeft: 20,
    marginBottom: 15,
    color: '#333',
    fontWeight: '300',
    fontSize: 20,
    width: width - 20,
    lineHeight: 20
  },
  info: {
    paddingLeft: 20,
    fontSize: 14,
    color: '#999',
    marginBottom: 10,
  },
  brief: {
    paddingLeft: 20,
    width: width - 20,
    fontSize: 14,
    lineHeight: 30,
    color: '#848484',
    marginBottom: 10
  },
  bottom: {
    marginTop: 10,
    flexDirection: 'row',
    width: width - 20,
    justifyContent: 'space-between'
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  movieName: {
    textAlign: 'right',
    width: width - 20,
    fontSize: 14,
    color: '#A7A7A7',
    marginBottom: 15
  },
  time: {
    marginLeft: 20,
    color: '#a7a7a7',
    fontSize: 12,
    alignSelf: 'flex-end'
  },
  heartsCount: {
    color: '#a7a7a7',
    fontSize: 10,
    marginRight: 5,
    alignSelf: 'flex-start',
    position: 'relative',
    top: -5,
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
  }
});

export default class MusicCard extends Component {
  state = {
    liked: false,
  }

  toggleLike = () => {
    this.setState({ liked: !this.state.liked });
  }

  renderCardContent = (cardType, data) => {
    if (cardType === 'music') {
      return <MusicCardContent data={data} />;
    } else if (cardType === 'movie') {
      return <MovieCardContent data={data} />;
    }

    return <StoryCardContent data={data} />;
  }

  render() {
    const { data, source, cardType } = this.props;

    return (
      <View style={styles.cardContainer}>
        <Text style={styles.label}>- {data.get('tag_list').size === 0 ? '音乐' : data.get('tag_list').get(0).get('title')} -</Text>
        <Text style={styles.title}>{data.get('title')}</Text>
        <Text style={styles.info}>文 / {data.get('author').get('user_name')}</Text>
        {this.renderCardContent(cardType, data)}
        <Text style={[styles.brief, cardType === 'movie' ? { marginBottom: 5 } : {}]}>{data.get('forward')}</Text>
        {cardType === 'movie' ? <Text style={styles.movieName}>——《{data.get('subtitle')}》</Text> : null}
        <View style={styles.bottom}>
          <Text style={styles.time}>{ formatDate(data.get('post_date')) }</Text>
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
