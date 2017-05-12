import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,
  WebView
} from 'react-native';
import { connect } from 'react-redux';
import WKWebView from 'react-native-wkwebview-reborn';
import { requestStory } from '../../actions';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1
  },
  webView: {
    width,
    flex: 1,
    backgroundColor: '#fff',
    borderBottomColor: '#fff'
  }
});

class ReadingDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      injectJS: `var bodyStyle = window.document.getElementsByTagName("body")[0].style;
      bodyStyle.padding = "0 20px";
      bodyStyle.marginTop = "60px";
      bodyStyle.marginBottom = "600px";
      alert(1)`
    };
  }

  componentDidMount() {
    console.log(this.props);
    const { source, source_id, storyId } = this.props.navigation.state.params;
    this.storyId = storyId;
    this.props.requestStory(storyId, { source, source_id });
  }

  render() {
    const data = this.props.storys.get(this.storyId);

    if (!data) {
      return null;
    }

    const html_content = data.get('hp_content');

    return (
      <View
        style={styles.container}
      >
        <WKWebView
          source={{ html: html_content }}
          style={styles.webView}
          injectedJavaScript={this.state.injectJS}
        >
          <Text style={styles.title}>{data.get('hp_title')}</Text>
          <Text style={styles.author}>文 / {data.get('hp_author')}</Text>
        </WKWebView>
      </View>
    );
  }
}

export default connect(
  state => ({
    storys: state.get('reading').get('story')
  }),
  { requestStory }
)(ReadingDetail);
