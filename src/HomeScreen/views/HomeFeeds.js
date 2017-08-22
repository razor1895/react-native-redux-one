import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Platform,
  Text,
  Dimensions,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import PictureCard from '../../components/PictureCard';
import Card from '../../components/Card';
import SlideList from '../../components/SlideList';
import RadioCard from '../../components/RadioCard';
import { FEEDS_BOTTOM } from '../../images';
import { requestHomeFeeds, requestHomeIdList } from '../../actions';
import { getCityName } from '../../services/home';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee'
  },
  //   iconSearch: {
  //     width: 22,
  //     height: 22,
  //     marginRight: 15,
  //     resizeMode: 'cover'
  //   },
  //   iconUser: {
  //     width: 22,
  //     height: 22,
  //     marginLeft: 15,
  //     resizeMode: 'contain'
  //   }
  header: {
    height: 64,
    backgroundColor: '#fff',
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  weather: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  city: {
    fontSize: 10,
    color: 'rgb(90,90,90)'
  },
  weatherDetail: {
    fontSize: 10,
    paddingLeft: 20,
    color: 'rgb(90,90,90)'
  },
  date: {
    fontSize: 18,
    letterSpacing: 4,
    fontWeight: '300',
    color: 'rgb(90,90,90)'
  },
  dateMonth: {
    marginHorizontal: 19
  },
  feedsBottomWrapper: {
    width,
    height: 170,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  feedsBottomImage: {
    width: 140,
    height: 100,
    resizeMode: 'cover'
  }
});

class HomeList extends Component {
  static propTypes = {
    requestHomeFeeds: PropTypes.func.isRequired,
    feeds: ImmutablePropTypes.mapContains({
      id: PropTypes.string,
      weather: ImmutablePropTypes.map,
      content_list: ImmutablePropTypes.list,
      date: PropTypes.string,
      menu: ImmutablePropTypes.mapContains({
        vol: PropTypes.string,
        list: ImmutablePropTypes.list
      })
    }).isRequired,
  }

  componentDidMount() {
    getCityName.then(res => res.json())
      .then(({ city }) => this.props.requestHomeFeeds(city, 0, { platform: Platform.OS }));
  }

  /* componentWillReceiveProps(nextProps) {
    if (!Immutable.is(this.props.ids, nextProps.ids)) {
      if (nextProps.ids.size > 0) {
        const id = nextProps.ids.get(0);
        getCityName.then(res => res.json())
          .then(({ city }) => this.props.requestHomeFeedsList(city, id, { platform: Platform.OS }));
      }
    }
  } */

  keyExtractor = (item, index) => (index === 1 ? 'special' : item.get('id'));

  renderCard = ({ item, index }) => {
    let cardComponent = null;
    let category = -1;

    if (![1, 9, 10].includes(index)) {
      category = parseInt(item.get('category'), 10);
    }

    if (category === 0) {
      cardComponent = <PictureCard data={item} />;
    } else if (category === 4) {
      cardComponent = <Card data={item} cardType={'music'} />;
    } else if ([1, 2, 3].indexOf(category) > -1) {
      cardComponent = <Card data={item} cardType={'story'} source="summary" />;
    } else if (category === 5) {
      cardComponent = <Card data={item} cardType={'movie'} />;
    } else if (category === -1) {
      cardComponent = <SlideList data={item} />;
    } else if (category === 8) {
      cardComponent = <RadioCard data={item} />
    }

    return cardComponent;
  }

  renderFeedsBottom = () => (
    <View style={styles.feedsBottomWrapper}>
      <Image source={FEEDS_BOTTOM} style={styles.feedsBottomImage} />
    </View>
  )

  render() {
    const feed = this.props.feeds.get(0);
    let data = [];
    let date = ['', '', ''];
    let weather = {};

    if (feed) {
      data = feed.get('content_list').toArray();
      data.splice(1, 0, feed.get('menu'));
      date = feed.get('date').split(' ')[0].split('-');
      weather = feed.get('weather').toJS();
    }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.date}>
            {`${date[0]} / `}
            <Text style={styles.dateMonth}>{date[1]}</Text>
            {` / ${date[2]} `}
          </Text>
          <View style={styles.weather}>
            <Text style={styles.city}>{weather.city_name}</Text>
            <Text style={styles.weatherDetail}>{weather.climate}</Text>
            <Text style={styles.weatherDetail}>{weather.temperature}℃</Text>
          </View>
        </View>
        <FlatList
          data={data}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderCard}
          ListFooterComponent={this.renderFeedsBottom}
        />
      </View>
    );
  }
}

export default connect(
  state => ({
    feeds: state.get('home').get('feeds'),
    ids: state.get('home').get('ids')
  }),
  { requestHomeFeeds, requestHomeIdList }
)(HomeList);
