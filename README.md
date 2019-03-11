# React Native Lottie Loader
----

A React Native Loader Component which uses Airbnb's [Lottie](https://lottiefiles.com) for beautiful loader animations. This library uses [lottie-react-native](https://github.com/react-native-community/lottie-react-native) to render loader animations. Therefor this library need to be installed and linked to your project before installing this package.

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
| animationStyle  | [View.propTypes.style](https://facebook.github.io/react-native/docs/view.html#style) - The style to be applied to the Lottie. | -  |
| animationType  | Changes animation on show and hide loader's view. Animation types supported by [Modal](https://facebook.github.io/react-native/docs/modal) | none  |
| autoPlay	  | A boolean flag indicating whether or not the animation should start automatically when mounted. | true |
| autoSize	  | A boolean flag indicating whether or not the animation should size itself automatically according to the width in the animation's JSON. This only works when source is an actual JS object of an animation. | false |
| loop	  | A boolean flag indicating whether or not the animation should loop.	| true |
| source  | Mandatory - The source of animation. Can be referenced as a local asset by a string, or remotely with an object with a uri property, or it can be an actual JS object of an animation, obtained (for example) with something like require('../path/to/animation.json'). [Lottie Animations](https://lottiefiles.com) used for animation | [Lottie Object](https://www.lottiefiles.com/1240-car2go-global-loading-animation)  |
| speed  | Speed the animation will progress. | 1 |
| style  | Style attributes for the view, as expected in a standard View. [View.propTypes.style](https://facebook.github.io/react-native/docs/view.html#style)  | - |
| supportedOrientations  | Orientations supported by [Modal](https://facebook.github.io/react-native/docs/modal) | portrait  |
| visible  | Controls the visibility of the loader. | false  |

### Methods (Imperative API):
----
| Method  | Description |   
| ------------- |--------------------------------------------------------------------------| 
play | Play the animation all the way through, at the speed specified as a prop.  |
| reset  | Reset the animation back to 0 progress. |

### License
----

Licensed under the [MIT](https://github.com/imbudhiraja/react-native-lottie-loader/blob/master/LICENSE)
