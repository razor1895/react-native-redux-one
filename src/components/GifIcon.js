import React, { Component } from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import * as Icon from '../images';

export default class GifIcon extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    playing: PropTypes.bool,
    startNum: PropTypes.number.isRequired,
    endNum: PropTypes.number.isRequired,
    rate: PropTypes.number,
    // style: Image.propTypes.style.isRequired
  }

  static defaultProps = {
    playing: false,
    rate: 300
  }

  constructor(props) {
    super(props);
    this.state = {
      frameKey: 0
    };
  }

  componentDidMount() {
    this.toggleInterval(this.props);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.playing);
    if (this.props.playing !== nextProps.playing) {
      this.toggleInterval(nextProps);
    }
  }

  componentWillUnmount() {
    clearInterval(this.animationInterval);
  }

  toggleInterval(props) {
    const { playing, startNum, endNum, rate } = props;
    let n = startNum;

    if (playing) {
      this.animationInterval = setInterval(() => {
        if (n === endNum) {
          n = startNum;
        } else {
          n += 1;
        }

        this.setState({
          frameKey: n
        });
      }, rate);
    } else if (this.animationInterval && !playing) {
      clearInterval(this.animationInterval);
      this.setState({
        frameKey: startNum
      });
    }
  }

  render() {
    return (
      <Image source={Icon[this.props.icon + this.state.frameKey]} style={this.props.style} />
    );
  }
}
