import React, {Component} from 'react';
import {
  View,
  Dimensions,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  AsyncStorage,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

export default class Hal1 extends Component {
  componentDidMount () {
    AsyncStorage.getItem ('access_token').then (value => {
      if (value != null) {
        this.props.navigation.navigate ('home');
      }
    });
  }
  render () {
    return (
      <View style={{flex: 1, backgroundColor: '#20b2AA'}}>
        <StatusBar backgroundColor="#20b2AA" barStyle="light-content" />

        <View style={{paddingTop: 40}}>
          <Image
            source={require ('../image/imageedit_7_4026338223.png')}
            style={{height: 100, width: 100, alignSelf: 'center'}}
          />
          <Text style={{textAlign: 'center', fontSize: 40, color: '#fff'}}>
            Alpha POS
          </Text>
          <Text style={{textAlign: 'center', fontSize: 20, color: '#fff'}}>
            " point of sale "
          </Text>
        </View>

        <View style={{paddingTop: 150}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('register')}
          >

            <View style={style.styleteks2}>
              <View style={{paddingTop: 17}}>
                <Text style={style.teks1}>
                  Sebagai Kasir
                </Text>
              </View>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('Loginpengelola')}
          >

            <View style={{paddingTop: 50}}>
              <View style={style.styleteks}>
                <View style={{paddingTop: 17}}>
                  <Text style={style.teks2}>
                    Sebagai Pengelola
                  </Text>
                </View>

              </View>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const style = StyleSheet.create ({
  styleteks: {
    borderRadius: 10,
    width: '90%',
    borderWidth: 1,
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: '#fff',
    backgroundColor: '#fff',
    height: 70,
  },
  styleteks2: {
    borderRadius: 10,
    width: '90%',
    borderWidth: 1,
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: '#fff',
    backgroundColor: '#20b2AA',
    height: 70,
  },
  teks1: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
  },
  teks2: {
    textAlign: 'center',
    fontSize: 20,
    color: '#20b2AA',
  },
});
