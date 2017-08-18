import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Platform,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import PictureCard from '../../components/PictureCard';
import StoryCard from '../../components/StoryCard';
import MusicCard from '../../components/MusicCard';
import MovieCard from '../../components/MovieCard';
import SlideList from '../../components/SlideList';
import { search, user } from '../../images';
import { requestHomeFeeds, requestHomeIdList } from '../../actions';
import { getCityName } from '../../services/home';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6f6f6'
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

    if (index !== 1) {
      category = parseInt(item.get('category'), 10);
    }

    if (category === 0) {
      cardComponent = <PictureCard data={item} />;
    } else if (category === 4) {
      cardComponent = <MusicCard data={item} />;
    } else if ([1, 2, 3].indexOf(category) > -1) {
      cardComponent = <StoryCard data={item} source="summary" />;
    } else if (category === 5) {
      cardComponent = <MovieCard data={item} />;
    } else if (category === -1) {
      cardComponent = <SlideList data={item} />;
    }

    console.log(cardComponent);

    return cardComponent;
  }

  render() {
    const feed = this.props.feeds.get(0);
    let data = [];

    if (feed) {
      data = feed.get('content_list').toArray();
      data.splice(1, 0, feed.get('menu'));
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderCard}
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
