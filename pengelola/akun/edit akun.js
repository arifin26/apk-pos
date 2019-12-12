import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  TextInput,
  Button,
  ScrollView,
  AsyncStorage,
  Image,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
export default class Editakun extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      filePath: {},
      name: '',
      email: '',
    };
  }
  componentDidMount () {
    AsyncStorage.getItem ('username').then (value => {
      if (value != null) {
        this.setState ({name: value});
      }
    });
    AsyncStorage.getItem ('email').then (value => {
      if (value != null) {
        this.setState ({email: value});
      }
    });
  }
  chooseFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [{name: 'customOptionKey', title: 'pilih foto kamu ....'}],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker (options, response => {
      console.log ('Response = ', response);

      if (response.didCancel) {
        console.log ('User cancelled image picker');
      } else if (response.error) {
        console.log ('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log ('User tapped custom button: ', response.customButton);
        alert (response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState ({
          filePath: source,
        });
      }
    });
  };
  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <StatusBar backgroundColor="#20b2AA" barStyle="dark-content" />
            <ImageBackground
              blurRadius={6}
              source={{uri: this.state.filePath.uri}}
              style={{height: 200, width: 400}}
            >
              <View style={styles.headerContent}>
                <View
                  style={{
                    paddingTop: 100,
                    paddingRight: 40,
                    flexDirection: 'column',
                  }}
                >
                  <Text style={styles.name}>
                    {this.state.name}
                  </Text>
                  <Text style={styles.name2}>
                    {this.state.email}
                  </Text>
                </View>
                <Image
                  style={styles.avatar}
                  source={{
                    uri: 'data:image/jpeg;base64,' + this.state.filePath.data,
                  }}
                  // source={require ('../image/bill.png')}
                />

              </View>
            </ImageBackground>
          </View>

          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <View style={{paddingRight: 200}}>
                <Text>jabatan :</Text>
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputs}
                  value={this.state.password}
                  placeholder="jabatan"
                  underlineColorAndroid="transparent"
                  // onChangeText={password => this.setState ({password})}
                />

              </View>
              <View style={{paddingRight: 200}}>
                <Text>password :</Text>
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputs}
                  value={this.state.password}
                  placeholder="password"
                  secureTextEntry={true}
                  underlineColorAndroid="transparent"
                  // onChangeText={password => this.setState ({password})}
                />

              </View>
              <TouchableOpacity
                onPress={this.chooseFile.bind (this)}
                style={styles.buttonContainer}
              >
                <Text>pilih foto</Text>

              </TouchableOpacity>

              <TouchableOpacity
                onPress={this.chooseFile.bind (this)}
                style={styles.buttonContainer}
              >
                <Text>upload</Text>

              </TouchableOpacity>

              <Text style={styles.description}>
                "alpha pos"
              </Text>
            </View>

          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create ({
  header: {
    backgroundColor: '#20b2AA',
  },
  headerContent: {
    flexDirection: 'row',

    paddingLeft: 20,
    paddingTop: 100,
  },
  avatar: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 4,
    borderColor: '#20b',
  },
  name: {
    fontSize: 22,
    color: '#000',
    fontWeight: '600',
  },
  name2: {
    fontSize: 17,
    color: '#000',
    fontWeight: '200',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
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
  profileDetail: {
    alignSelf: 'center',
    marginTop: 300,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: '#ffffff',
  },
  detailContent: {
    margin: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#20b2AA',
  },
  count: {
    fontSize: 18,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
    marginTop: 40,
  },
  textInfo: {
    fontSize: 18,
    marginTop: 20,
    color: '#696969',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#20b2AA',
  },
  description: {
    fontSize: 20,
    color: '#00C',
    marginTop: 10,
    textAlign: 'center',
  },
});
