import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground
} from 'react-native';
import { MOVE_BACKGROUND } from '../images';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  movieBackground: {
    width: width - 40,
    height: 200,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  image: {
    // position: 'absolute',
    // top: 35,
    width: width - 40,
    height: 170,
    resizeMode: 'stretch',
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
});

export default ({ data }) => (
  <View>
    <ImageBackground style={styles.movieBackground} source={MOVE_BACKGROUND}>
      <Image
        style={styles.image}
        source={{ uri: data.get('img_url') }}
      />
    </ImageBackground>
  </View>
);
