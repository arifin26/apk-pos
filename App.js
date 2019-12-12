import React from 'react';
import {Text, View} from 'react-native';
import App from './src/splash';

class First extends React.Component {
  render () {
    return <App />;
  }
}
export default First;

const styles = {
  container: {
    height: 50,
    width: 100,
    backgroundColor: 'red',
  },
  teks: {
    fontSize: 26,
  },
};
