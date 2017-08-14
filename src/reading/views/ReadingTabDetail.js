import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import HTMLView from 'react-native-htmlview';
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
  },
  webViewText: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 32
  },
  strong: {
    fontWeight: 'bold',
  },
  marginZero: {
    marginBottom: 0,
  }
});

class ReadingDetail extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
    const { source, source_id, storyId } = this.props.navigation.state.params;
    this.storyId = storyId;
    this.props.requestStory(storyId, { source, source_id });
  }

  renderNode(node, index, siblings, parent, defaultRenderer) {
    if (node.name === 'p') {
      return (
        <Text style={styles.webViewText}>{node.children.map(v => v.data)}</Text>
      )
    }

    if (node.type === 'text') {
      return;
    }
  }

  render() {
    const data = this.props.storys.get(this.storyId);

    if (!data) {
      return null;
    }

    const htmlContent = `
    <div>
      <h1>Some really snazzy html</h1>
      <p>Bacon ipsum dolor amet turducken shank ribeye rump. T-bone boudin chicken, alcatra pig ribeye turkey venison ground round rump sirloin landjaeger spare ribs. Ball tip fatback prosciutto, salami swine kielbasa ground round andouille rump pig tongue sirloin cow beef ribs jerky. Cupim kielbasa short loin sausage pork landjaeger andouille jerky turkey capicola picanha beef.</p>
      <h5 style="margin-bottom:0px;">Unsupported</h5>
      <ol>
        <li>​<span style="background-color: rgb(192, 80, 77);"><span style="color: rgb(255, 255, 0);"><strong>Blink</strong></span></span> <span style="background-color: rgb(255, 255, 0);"><span style="color: rgb(192, 80, 77);"><strong>tag</strong></span></span></li>
        <li><span>rolling Marquee... Scr</span></li>
      </ol>
      <h5 style="margin-bottom:0px;">Supported</h5>
      <ul>
        <li><span>​<strong>The</strong> <em>kitchen</em> <u>sink</u></span></li>
        <li><span style="font-size: 20px;">The</span> <span style="font-size: 11px;">bathroom</span> <strong><span style="color: rgb(49, 133, 155);">sink</span></strong></li>
      </ul>
      <p style="text-align: right;"><span style="color: rgb(118, 146, 60);"><strong>The sink that lives over here</strong></span></p>
      <p style="text-align: center;"><span style="color: rgb(227, 108, 9);">And other HTML-y goodness :-)</span></p>
      <p style="text-align: center;">
        <img src="https://facebook.github.io/react-native/img/opengraph.png" style="width:100px; height:100px;"/>
      </p>
      <p>Drumstick strip steak ball tip pancetta jerky kevin filet mignon tri-tip. Ground round filet mignon meatloaf salami rump kielbasa fatback beef picanha tail tongue ball tip pork loin ham hock strip steak. Swine short ribs cow kielbasa ribeye tri-tip pancetta porchetta beef ribs fatback shoulder. Filet mignon pork loin salami brisket, cupim shoulder turkey prosciutto tenderloin beef ribs. Tail leberkas brisket t-bone beef.</p>
    </div>
    `;

    return (
      <ScrollView
        style={styles.container}
      >
        <HTMLView
          value={htmlContent}
          style={styles.webView}
          renderNode={this.renderNode}
        />
      </ScrollView>
    );
  }
}

export default connect(
  state => ({
    storys: state.get('reading').get('story')
  }),
  { requestStory }
)(ReadingDetail);
