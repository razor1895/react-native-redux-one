import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  ListView,
  Platform
} from 'react-native';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import StoryCard from '../../components/StoryCard';
import { search, user } from '../../images';
import { requestHomeFeedsList } from '../../actions';
import { getCurrentId } from '../../utils';
import { getCityName } from '../../services/home';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6f6f6'
  },
  iconSearch: {
    width: 22,
    height: 22,
    marginRight: 15,
    resizeMode: 'cover'
  },
  iconUser: {
    width: 22,
    height: 22,
    marginLeft: 15,
    resizeMode: 'contain'
  }
});

class HomeList extends Component {
  static navigationOptions = {
    title: '一个首页',
    headerTintColor: '#b4b4b4',
    headerRight: <Image source={search} style={styles.iconSearch} />,
    headerLeft: <Image source={user} style={styles.iconUser} />,
  };

  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => !Immutable.is(r1, r2)
    });
    this.state = {
      dataSource,
    };
  }

  componentDidMount() {
    const id = getCurrentId();
    getCityName.then(res => res.json())
      .then(({ city }) => this.props.requestHomeFeedsList(city, id, { platform: Platform.OS }));
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource.cloneWithRows(this.props.home.get('feedsList').toArray())}
          renderRow={rowData => <StoryCard data={rowData} />}
          enableEmptySections
          showsVerticalScrollIndicator={false}
          removeClippedSubviews={false}
        />
      </View>
    );
  }
}

export default connect(
  state => ({
    home: state.get('home')
  }),
  { requestHomeFeedsList }
)(HomeList);
