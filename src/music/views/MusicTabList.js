import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  ListView
} from 'react-native';
import MusicCard from '../../components/MusicCard';
import { search, user } from '../../images';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
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

export default class MusicList extends Component {
  static navigationOptions = {
    title: '一个音乐',
    headerTintColor: '#b4b4b4',
    headerRight: <Image source={search} style={styles.iconSearch} />,
    headerLeft: <Image source={user} style={styles.iconUser} />,
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={rowData => <MusicCard data={rowData} />}
        />
      </View>
    );
  }
}
