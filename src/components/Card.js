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
    backgroundColor: processColor('#fff'),
    marginBottom: 5,
  },
  label: {
    color: '#a6a6a6',
    textAlign: 'center',
    fontSize: 12,
    marginTop: 12,
  },
  title: {
    marginTop: 12,
    paddingLeft: 20,
    marginBottom: 15,
    color: '#333',
    fontWeight: '300',
    fontSize: 20,
    width: width - 20,
    lineHeight: 30
  },
  info: {
    paddingLeft: 20,
    fontSize: 14,
    color: '#999',
    marginBottom: 10,
  },
  brief: {
    marginTop: 3,
    paddingLeft: 20,
    width: width - 20,
    fontSize: 14,
    lineHeight: 28,
    color: '#808080',
  },
  bottom: {
    marginTop: 20,
    flexDirection: 'row',
    width: width - 20,
    justifyContent: 'space-between',
    height: 40,
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  movieName: {
    textAlign: 'right',
    width: width - 20,
    fontSize: 14,
    color: '#a6a6a6',
  },
  time: {
    marginLeft: 20,
    color: '#a6a6a6',
    fontSize: 12,
    marginTop: 2,
    lineHeight: 32,
  },
  heartsCount: {
    color: '#a6a6a6',
    fontSize: 12,
    position: 'relative',
    top: -2,
  },
  heartGroup: {
    position: 'absolute',
    right: 17,
    minWidth: 50,
    zIndex: 5,
    flexDirection: 'row'
  },
  heart: {
    width: 16,
    height: 16,
    resizeMode: 'cover'
  },
  share: {
    width: 16,
    height: 16,
    marginTop: 3,
    resizeMode: 'cover',
    zIndex: 6,
  }
});

export default class MusicCard extends Component {
  state = {
    liked: false,
  }

  toggleLike = () => {
    this.setState({ liked: !this.state.liked });
  }

  renderCardLabel = (category, tagList) => {
    let title = '';

    if (category === '1' && tagList.size > 0) {
      title = tagList.get(0).get('title');
    } else if (category === '1') {
      title = '阅读';
    } else if (category === '2') {
      title = '连载';
    } else if (category === '3') {
      title = '问答';
    } else if (category === '4') {
      title = '音乐';
    } else if (category === '5') {
      title = '影视';
    }

    return title;
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
        <Text style={styles.label}>- {this.renderCardLabel(data.get('category'), data.get('tag_list'))} -</Text>
        <Text style={styles.title}>{data.get('title')}</Text>
        <Text style={styles.info}>文 / {data.get('author').get('user_name')}</Text>
        {this.renderCardContent(cardType, data)}
        <Text style={[styles.brief, cardType === 'movie' ? { marginBottom: 5 } : {}]}>{data.get('forward')}</Text>
        {cardType === 'movie' ? <Text style={styles.movieName}>——《{data.get('subtitle')}》</Text> : null}
        <View style={styles.bottom}>
          <Text style={styles.time}>{ formatDate(data.get('post_date')) }</Text>
          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.heartGroup} onPress={this.toggleLike}>
              <Image style={styles.heart} source={this.state.liked ? HEART_FILL : HEART} />
              <Text style={styles.heartsCount}>{data.get('like_count')}</Text>
            </TouchableOpacity>
            <Image style={styles.share} source={SHARE} />
          </View>
        </View>
      </View>
    );
  }
}
