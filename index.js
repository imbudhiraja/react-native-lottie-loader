import React from 'react';
import { Dimensions, StyleSheet, View, Modal, ViewPropTypes, Text } from 'react-native';
import { arrayOf, bool, object, oneOf, number, string } from 'prop-types';
import LottieAnimation from 'lottie-react-native';

const WIDTH = Dimensions.get('window').width;
const TRANSLUCENT_COLOR = 'rgba(0,0,0,.7)';
const TEXT_COLOR = '#ffffff';

const styles = StyleSheet.create({
  animationStyle: {
    alignSelf: 'center',
    height: (WIDTH / 100) * 30,
    width: (WIDTH / 100) * 30,
  },
  container: {
    alignItems: 'center',
    backgroundColor: TRANSLUCENT_COLOR,
    bottom: 0,
    flex: 1,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  textStyle: {
    alignSelf: 'center',
    color: TEXT_COLOR,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default class Spinner extends React.PureComponent {
  static propTypes = {
    animationStyle: ViewPropTypes.style,
    animationType: oneOf(['none', 'slide', 'fade']),
    autoPlay: bool,
    autoSize: bool,
    loop: bool,
    message: string,
    source: object,
    speed: number,
    style: ViewPropTypes.style,
    supportedOrientations: arrayOf(string.isRequired),
    textStyle: Text.propTypes.style,
    visible: bool,
  };

  static defaultProps = {
    animationStyle: {},
    animationType: 'none',
    autoPlay: true,
    autoSize: true,
    loop: true,
    message: '',
    source: require('./loading.json'), //eslint-disable-line
    speed: 1,
    style: {},
    supportedOrientations: ['portrait'],
    textStyle: {},
    visible: false,
  };

  animation = React.createRef();

  play = () => {
    if (this.animation.current) {
      this.animation.current.play();
    }
  };

  reset = () => {
    if (this.animation.current) {
      this.animation.current.reset();
    }
  };

  renderLoader = () => {
    const {
      animationStyle, autoPlay, autoSize, loop, source, speed,
    } = this.props;

    return (
      <LottieAnimation
        ref={this.animation}
        autoPlay={autoPlay}
        loop={loop}
        style={[styles.animationStyle, animationStyle]}
        source={source}
        speed={speed}
        autoSize={autoSize}
      />
    );
  };

  renderText = () => {
    const {
      textStyle, message,
    } = this.props;

    return <Text style={[styles.textStyle, textStyle]}>{message}</Text>;
  };

  render() {
    const {
      animationType, style, visible, supportedOrientations,
    } = this.props;

    return (
      <Modal
        transparent
        visible={visible}
        animationType={animationType}
        supportedOrientations={supportedOrientations}
        onRequestClose={() => true}
      >
        <View style={[styles.container, style]}>
          {this.renderLoader()}
          {this.renderText()}
        </View>
      </Modal>
    );
  }
}
