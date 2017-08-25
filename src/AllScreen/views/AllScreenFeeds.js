import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';

import { requestBannerList, requestTopicList, requestHotAuthorList, requestQAList } from '../../actions';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee'
  },
  swiperContainerStyle: {
    flex: 0
  },
  paginationStyle: {
    left: width - 94,
    bottom: 219
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    borderWidth: 1,
    borderColor: '#fff',
    marginRight: 8
  },
  activeDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#fff',
    marginRight: 8
  },
  swipeItem: {
    width,
    height: 234
  },
  tab: {
    width,
    height: 240,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 13,
    marginBottom: 10,
  },
  tabImage: {
    width: width - 40,
    height: 165,
    resizeMode: 'cover'
  },
  tabText: {
    fontSize: 14,
    color: '#636363',
    marginBottom: 18
  },
  cardContainer: {
    padding: 20,
    backgroundColor: '#fff',
    position: 'relative',
    paddingBottom: 30
  },
  cardImage: {
    width: width - 40,
    height: 200,
    marginBottom: 25
  },
  cardTitle: {
    fontSize: 16,
    color: '#5f5f5f',
  },
  cardBage: {
    position: 'absolute',
    left: 20,
    top: 20,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderRightWidth: 50,
    borderTopWidth: 50,
    borderRightColor: 'transparent',
    borderTopColor: 'rgba(0,0,0,.3)'
  },
  badgeText: {
    position: 'absolute',
    color: '#fff',
    fontSize: 10,
    left: 25,
    top: 30,
    backgroundColor: 'transparent',
    transform: [
      { rotate: '-45deg' }
    ]
  },
  authorCard: {
    paddingHorizontal: 20,
    paddingTop: 14,
    backgroundColor: '#fff'
  },
  cardText: {
    fontSize: 14,
    color: '#636363',
    marginBottom: 28,
  },
  author: {
    flexDirection: 'row',
    width: width - 40,
    position: 'relative',
    alignItems: 'center',
    marginBottom: 30,
  },
  authorAvatar: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
    borderRadius: 20,
    marginRight: 12,
  },
  authorInfo: {
    height: 30,
    justifyContent: 'space-between',
  },
  authorName: {
    fontSize: 13,
    color: '#636363'
  },
  authorBrief: {
    width: 230,
    fontSize: 12,
    color: '#a6a6a6'
  },
  actionBtn: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    borderColor: '#afafaf',
    height: 33,
    borderWidth: 1.2,
  },
  actionBtnText: {
    color: '#a6a6a6',
    fontSize: 12,
  },
  swapBtn: {
    marginTop: 10,
    borderRadius: 3,
    height: 33,
    width: 83,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#9c9c9c',
    borderWidth: 1.2,
    marginLeft: (width - 123) / 2,
    marginBottom: 30
  },
  swapBtnText: {
    color: '#9c9c9c',
    fontSize: 13,
  },
  QACard: {
    backgroundColor: '#fff',
    paddingTop: 14,
    paddingBottom: 30
  },
  QAText: {
    fontSize: 14,
    color: '#636363',
    marginBottom: 18,
    marginLeft: 20
  },
  QAItem: {
    height: 121,
    width: 201,
    position: 'relative',
    borderRadius: 4,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  QAImage: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: 121,
    width: 201,
    resizeMode: 'cover',
    borderRadius: 4,
  },
  QAContentContainerStyle: {
    paddingHorizontal: 20
  },
  QABadge: {
    left: 0,
    top: 0,
    zIndex: 12
  },
  QABadgeText: {
    left: 5,
    top: 10,
    zIndex: 12
  },
  QALayer: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 201,
    height: 121,
    zIndex: 10
  },
  QATitle: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: 'transparent',
    zIndex: 12
  },
  separator: {
    height: 10,
    backgroundColor: 'transparent'
  }
});

class TopicFeeds extends Component {
  static propTypes = {
    requestBannerList: PropTypes.func.isRequired,
    requestTopicList: PropTypes.func.isRequired,
    requestQAList: PropTypes.func.isRequired,
    requestHotAuthorList: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      hello: true,
    };
  }

  componentDidMount() {
    this.props.requestBannerList({ last_id: 0 });
    this.props.requestTopicList({ last_id: 0 });
    this.props.requestQAList({ last_id: 0 });
    this.props.requestHotAuthorList();
  }

  navigateToContent = (path, params) => {
    this.props.navigation.navigate(path, params);
  }

  keyExtractor = item => item.get('id');

  renderListHeader = () => {
    if (this.props.banners.size) {
      return (
        <View>
          <Swiper
            style={styles.wrapper}
            autoplay
            height={234}
            containerStyle={styles.swiperContainerStyle}
            removeClippedSubviews={false}
            dot={<View style={styles.dot} />}
            activeDot={<View style={styles.activeDot} />}
            paginationStyle={styles.paginationStyle}
          >
            {this.renderSwiperItem(this.props.banners.toArray())}
          </Swiper>
          <View style={styles.tab}>
            <Text style={styles.cardText}>分类导航</Text>
            <Image source={{ uri: 'http://image.wufazhuce.com/alltab-toc.png?v=4.3.1' }} style={styles.tabImage} />
          </View>
        </View>
      );
    }

    return null;
  }

  renderSwiperItem = banners => banners.map(item => (
    <Image key={item.get('id')} source={{ uri: item.get('cover') }} style={styles.swipeItem} />
  ));

  renderTopicCard = ({ item }) => {
    if (item.get('id') === 'author') {
      return (
        <View style={styles.authorCard}>
          <Text style={styles.tabText}>近期热门作者</Text>
          {item.get('authors').toArray().slice(0, 3).map(v => (
            <View key={v.get('user_id')} style={styles.author}>
              <Image source={{ uri: v.get('web_url') }} style={styles.authorAvatar} />
              <View style={styles.authorInfo}>
                <Text style={styles.authorName}>{v.get('user_name')}</Text>
                <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.authorBrief}>{v.get('desc')}</Text>
              </View>
              <TouchableOpacity style={styles.actionBtn}>
                <Text style={styles.actionBtnText}>关注</Text>
              </TouchableOpacity>
            </View>
          ))}
          <TouchableOpacity style={styles.swapBtn}>
            <Text style={styles.swapBtnText}>换一换</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (item.get('id') === 'QAs') {
      return (
        <View style={styles.QACard}>
          <Text style={styles.QAText}>所有人问所有人</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.QAContentContainerStyle}
          >
            {item.get('QAs').toArray().map(v => (
              <View key={v.get('id')} style={styles.QAItem}>
                <LinearGradient
                  start={{ x: 0.0, y: 0.0 }}
                  locations={[0.0, 1.0]}
                  end={{ x: 0.0, y: 1.0 }}
                  colors={['rgba(0,0,0,.4)', 'rgba(0,0,0,.6)']}
                  style={styles.QALayer}
                />
                <Image source={{ uri: v.get('cover') }} style={styles.QAImage} />
                <View style={[styles.cardBage, styles.QABadge]} />
                <Text style={[styles.badgeText, styles.QABadgeText]}>专题</Text>
                <Text style={styles.QATitle}>{v.get('title')}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      );
    }

    return (
      <TouchableHighlight
        underlayColor={'#000'}
        onPress={() => this.navigateToContent('TopicDetail', { content_id: item.get('content_id'), source_id: item.get('id'), source: 'banner' })}
      >
        <View style={styles.cardContainer}>
          <Image source={{ uri: item.get('cover') }} style={styles.cardImage} />
          <View style={styles.cardBage} />
          <Text style={styles.badgeText}>专题</Text>
          <Text style={styles.cardTitle}>{ item.get('title') }</Text>
        </View>
      </TouchableHighlight>
    );
  }


  render() {
    const { banners, topics, authors, QAs } = this.props;
    const data = topics.size > 0 ? topics.toArray() : [];
    data.splice(4, 0, Immutable.fromJS({ id: 'author', authors }));
    data.splice(5, 0, Immutable.fromJS({ id: 'QAs', QAs }));

    return (
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={this.renderListHeader}
          ItemSeparatorComponent={({ highlighted }) => (
            <View style={[styles.separator, highlighted]} />
          )}
          data={data}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderTopicCard}
        />
      </View>
    );
  }
}

export default connect(
  state => ({
    banners: state.get('topic').get('banners'),
    topics: state.get('topic').get('topics'),
    authors: state.get('topic').get('hotAuthors'),
    QAs: state.get('topic').get('QAs')
  }),
  { requestBannerList, requestTopicList, requestHotAuthorList, requestQAList }
)(TopicFeeds);
