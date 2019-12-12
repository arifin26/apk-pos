import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  AsyncStorage,
  Button,
  TouchableOpacity,
  Image,
  StatusBar,
  Modal,
  Alert,
  ActivityIndicator,
} from 'react-native';

export default class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    modalVisible: false,
  };
  componentDidMount () {
    AsyncStorage.getItem ('access_token').then (value => {
      if (value != null) {
        this.props.navigation.navigate ('home');
      }
    });
  }

  register = (username, email, password) => {
    this.setState ({modalVisible: true});
    fetch ('https://peaceful-savannah-85788.herokuapp.com/api/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify ({
        username: username,
        email: email,
        password: password,
      }),
    })
      .then (response => response.json ())
      .then (response => {
        if (response.access_token) {
          AsyncStorage.setItem ('access_token', response.access_token);
          AsyncStorage.setItem ('username', response.detail_user.username);
          AsyncStorage.setItem ('email', response.detail_user.email);
          AsyncStorage.setItem ('email', response.detail_user.role);
          this.props.navigation.navigate ('home');
          this.setState ({modalVisible: false});
        } else {
          Alert.alert ('diisi dulu mas..');
          this.setState ({modalVisible: false});
        }
      })
      .catch (error => {
        console.log (error);
        alert ('error');
        this.setState ({modalVisible: false});
      });
  };

  onClickListener = viewId => {
    Alert.alert ('Alert', 'Button pressed ' + viewId);
  };

  render () {
    let {username, email, password} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
        >
          <View
            style={{
              height: '100%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                height: 300,
                width: 300,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ActivityIndicator size="large" />
            </View>
          </View>
        </Modal>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            value={this.state.username}
            placeholder="name"
            onChangeText={teks => this.setState ({username: teks})}
            underlineColorAndroid="transparent"
            // onChangeText={email => this.setState ({email})}
          />
          <Image
            style={styles.inputIcon}
            source={require ('../image/users.png')}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            value={this.state.email}
            placeholder="email"
            onChangeText={teks => this.setState ({email: teks})}
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            // onChangeText={email => this.setState ({email})}
          />
          <Image
            style={styles.inputIcon}
            source={require ('../image/email.png')}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            value={this.state.password}
            placeholder="password"
            onChangeText={teks => this.setState ({password: teks})}
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            // onChangeText={password => this.setState ({password})}
          />
          <Image
            style={styles.inputIcon}
            source={require ('../image/padlock.png')}
          />
        </View>

        <TouchableOpacity
          style={styles.btnByRegister}
          onPress={() => this.onClickListener ('restore_password')}
        >
          <Text style={styles.textByRegister}>
            By registering on this App you confirm that you have read and accept our policy
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.register (username, email, password)}
        >
          <Text style={styles.loginText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate ('Loginkasir')}
          style={styles.buttonContainer}
        >
          <Text style={styles.btnText}>Have an account?</Text>
        </TouchableOpacity>
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
    borderColor: '#20B2AA',
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
    color: '#20B2AA',
    fontWeight: 'bold',
  },
  textByRegister: {
    color: '#20B2AA',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
