import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, StatusBar, View} from 'react-native';
import Animation from 'lottie-react-native';
import Route from '../navigation/route';
import anim from '../image/seo_search_ads.json';

export default class App extends Component {
  state = {
    role: true,
  };

  componentDidMount () {
    this.animation.play ();
  }
  render () {
    setTimeout (() => {
      this.setState ({role: false});
    }, 2000);

    if (this.state.role) {
      return (
        <View style={styles.container}>
          <StatusBar backgroundColor="#20b2AA" barStyle="light-content" />
          <View>
            <Animation
              ref={animation => {
                this.animation = animation;
              }}
              style={{
                width: 300,
                height: 300,
              }}
              loop={true}
              source={anim}
            />
          </View>

        </View>
      );
    }
    return <Route />;
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#20b2AA',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

AppRegistry.registerComponent ('App', () => App);
