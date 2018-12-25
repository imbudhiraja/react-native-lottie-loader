import React from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Modal,
  ViewPropTypes
} from "react-native";
import { arrayOf, bool, object, oneOf, string } from "prop-types";
import LottieAnimation from "lottie-react-native";

const WIDTH = Dimensions.get("window").width;
const TRANSLUCENT_COLOR = "rgba(0,0,0,.7)";

const styles = StyleSheet.create({
  animationStyle: {
    alignSelf: "center",
    height: (WIDTH / 100) * 30,
    width: (WIDTH / 100) * 30
  },
  container: {
    alignItems: "center",
    backgroundColor: TRANSLUCENT_COLOR,
    bottom: 0,
    flex: 1,
    justifyContent: "center",
    left: 0,
    position: "absolute",
    right: 0,
    top: 0
  }
});

export default class Spinner extends React.PureComponent {
  static propTypes = {
    animation: object,
    animationStyle: ViewPropTypes.style,
    animationType: oneOf(["none", "slide", "fade"]),
    style: ViewPropTypes.style,
    supportedOrientations: arrayOf(string.isRequired),
    visible: bool
  };

  static defaultProps = {
    animation: require("./loading.json"), //eslint-disable-line
    animationStyle: {},
    animationType: "none",
    style: {},
    supportedOrientations: ["portrait"],
    visible: false
  };

  animationRef = React.createRef();

  componentDidMount() {
    if (this.animationRef.current) {
      this.animationRef.current.play();
    }
  }

  componentDidUpdate(prevProps) {
    const { visible } = this.props;

    if (prevProps.visible !== visible) {
      if (this.animationRef.current) {
        this.animationRef.current.play();
      }
    }
  }

  render() {
    const {
      animation,
      animationType,
      animationStyle,
      style,
      supportedOrientations,
      visible
    } = this.props;

    return (
      <Modal
        visible={visible}
        animationType={animationType}
        supportedOrientations={supportedOrientations}
        transparent
      >
        <View style={[styles.container, style]}>
          <LottieAnimation
            ref={this.animationRef}
            style={[styles.animationStyle, animationStyle]}
            loop
            source={animation}
          />
        </View>
      </Modal>
    );
  }
}
