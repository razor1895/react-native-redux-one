import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import Cheer from 'cheerio-without-node-native';
import LinearGradient from 'react-native-linear-gradient';

import { requestTopicContent } from '../../actions';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  oneSpecialHeaderBox: {
    marginLeft: -20,
    marginRight: -20,
    position: 'relative'
  },
  oneImageAspectBox: {
    width
  },
  oneImageAspectMask: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 10,
    width,
    flex: 1,
  },
  oneSpecialTitleBox: {
    marginTop: 30,
    fontSize: 24,
    color: '#231F20',
    lineHeight: 32,
  },
  oneSpecialSubTitleBox: {
    fontSize: 12,
    lineHeight: 20,
    color: '#231F20'
  },
  oneSpecialContentBox: {
    marginVertical: 30,
    width: width - 40
  },
  oneSpecialContentText: {
    fontSize: 16,
    lineHeight: 32,
    color: '#231F20'
  },
});

class TopicContent extends Component {
  static propTypes = {
    requestTopicContent: PropTypes.func.isRequired,
  }

  static navigationOptions = {
    tabBarVisible: false
  }

  constructor(props) {
    super(props);
    this.state = {
      headerBackgroundImageUrl: '',
      headerImageHeight: 200,
      oneSpecialTitle: '',
      oneSpecialSubTitle: '',
      oneSpecialContent: [],
    };
  }

  componentDidMount() {
    const { source, source_id, content_id } = this.props.navigation.state.params;
    this.content_id = content_id;
    this.props.requestTopicContent(content_id, { source, source_id });
  }

  componentWillReceiveProps(nextProps) {
    const { content_id } = nextProps.navigation.state.params;
    const nextContent = nextProps.contents.get(content_id);
    const content = this.props.contents.get(this.content_id);

    if (!Immutable.is(content, nextContent)) {
      const $ = Cheer.load(nextContent.get('html_content'), { decodeEntities: false, normalizeWhitespace: true });
      const headerBackgroundImageUrl = $('.one-special-header-box .one-image-aspect-box').attr('style').split('url(')[1].split(')')[0];
      const oneSpecialTitle = $('.one-special-title-box').text().trim();
      const oneSpecialSubTitle = $('.one-special-subtitle-box').text().trim();
      const oneSpecialContent = $('.one-special-content-box').html()
        .split(' ')
        .join('')
        .split('<br>')
        .join('\n');
      this.getPictureSize(headerBackgroundImageUrl);
      console.log(oneSpecialContent);
      this.setState({
        headerBackgroundImageUrl,
        oneSpecialTitle,
        oneSpecialSubTitle,
        oneSpecialContent
      });
    }
  }

  getPictureSize = (uri) => {
    Image.getSize(uri, (imageWidth, imageHeight) =>
      this.setState({ headerImageHeight: imageHeight * (width / imageWidth) }));
  }

  render() {
    const { content_id } = this.props.navigation.state.params;
    const containerStyle = {};
    const headerImageStyle = { height: this.state.headerImageHeight };
    const content = this.props.contents.get(content_id);

    if (content) {
      containerStyle.backgroundColor = content.get('bg_color');
      const fontColor = { color: content.get('font_color') };

      return (
        <ScrollView style={[styles.container, containerStyle]}>
          { this.state.headerBackgroundImageUrl && (
            <View style={styles.oneSpecialHeaderBox}>
              <Image
                source={{ uri: this.state.headerBackgroundImageUrl }}
                style={[styles.oneImageAspectBox, headerImageStyle]}
              />
              <LinearGradient
                start={{ x: 0.0, y: 0.0 }}
                locations={[0.0, 1.0]}
                end={{ x: 0.0, y: 1.0 }}
                colors={['rgba(0,0,0,.2)', 'rgba(0,0,0,.0)']}
                style={[styles.oneImageAspectMask, headerImageStyle]}
              />
            </View>
          )}
          { this.state.oneSpecialTitle ? (
            <Text style={[styles.oneSpecialTitleBox, fontColor]}>{this.state.oneSpecialTitle}</Text>
          ) : null}
          { this.state.oneSpecialSubTitle ? (
            <Text style={[styles.oneSpecialSubTitleBox, fontColor]}>{this.state.oneSpecialSubTitle}</Text>
          ) : null}
          { this.state.oneSpecialContent ? (
            <View style={styles.oneSpecialContentBox}>
              <Text style={[styles.oneSpecialContentText, fontColor]}>{this.state.oneSpecialContent}</Text>
            </View>
          ) : null}
        </ScrollView>
      );
    }

    return <View style={styles.container} />;
  }
}

export default connect(
  state => ({
    contents: state.get('topic').get('contents')
  }),
  { requestTopicContent }
)(TopicContent);
