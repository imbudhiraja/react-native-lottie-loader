# React Native Lottie Loader
----

react-native-lottie-loader is useful to show lottie animation spinners in react-native mobile applications.

### Installation
----
```
npm install --save react-native-lottie-loader lottie-react-native
react-native link lottie-ios
react-native link lottie-react-native
```

### Usage
----

```
import React from 'react';
import LottieLoader from 'react-native-lottie-loader';

export default class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  componentDidMount() {
    const context = this;

    setTimeout(() => {
      context.setState({ visible: false });
    }, 3000);
  }

  render() {
    const { visible } = this.state;

    return <LottieLoader visible={visible} />;
  }
}
```

### Usage with redux
----

```
import React from 'react';
import { bool } from 'prop-types';
import { connect } from 'react-redux';
import LottieLoader from 'react-native-lottie-loader';

class Loader extends React.PureComponent {
  static propTypes = { visible: bool.isRequired };

  render() {
    const { visible } = this.props;

    return <LottieLoader visible={visible} />;
  }
}

const mapStateToProps = ({ app: { visible } }) => ({ visible });

export default connect(mapStateToProps)(Loader);

```


### Props
----
| Prop  | Description | Default |   
| ------------- | ------------- | ------------- |
| animation  | [Lottie Animations](https://lottiefiles.com) used for animation  | [Lottie Animmation](https://www.lottiefiles.com/1240-car2go-global-loading-animation)  |
| animationStyle  | [View.propTypes.style](https://facebook.github.io/react-native/docs/view.html#style) - style of the default animation style.  | -  |
| style  | [View.propTypes.style](https://facebook.github.io/react-native/docs/view.html#style) - style of the container.  | -  |
| supportedOrientations  | Orientations supported by [Modal](https://facebook.github.io/react-native/docs/modal) | portrait  |
| visible  | Visiblity of loader | false  |
| animationType  | Animation types supported by [Modal](https://facebook.github.io/react-native/docs/modal) | none  |


### License
----

[MIT](https://github.com/imbudhiraja/react-native-lottie-loader/blob/master/LICENSE)
