import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

export default class Store extends Component {
  constructor (props) {
    super (props);
    state = {
      email: '',
      password: '',
    };
  }

  onClickListener = viewId => {
    Alert.alert ('Alert', 'Button pressed ' + viewId);
  };

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.btnText}>nama toko :</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="nama toko"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState ({email})}
          />

        </View>

        <Text style={styles.btnText}>alamat :</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="alamat"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState ({email})}
          />

        </View>

        {/* <Text style={styles.btnText}></Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState ({password})}
          />
          <Image
            style={styles.inputIcon}
            source={{
              uri: 'https://img.icons8.com/color/40/000000/password.png',
            }}
          />
        </View> */}

        <TouchableOpacity
          style={styles.btnByRegister}
          onPress={() => this.onClickListener ('restore_password')}
        >
          <Text style={styles.textByRegister}>
            jika anda menulis TextInput di atas maka akan tertulis
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.onClickListener ('login')}
        >
          <Text style={styles.loginText}>create</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.onClickListener ('register')}
        />
      </View>
    );
  }
}

const resizeMode = 'center';

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 300,
    borderRadius: 30,
    backgroundColor: 'transparent',
  },
  btnByRegister: {
    height: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    width: 300,
    backgroundColor: 'transparent',
  },
  loginButton: {
    backgroundColor: '#00b5ec',

    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: 'white',
  },
  bgImage: {
    flex: 1,
    resizeMode,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  btnText: {
    color: '#009688',
    fontWeight: 'bold',
  },
  textByRegister: {
    color: '#009688',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
