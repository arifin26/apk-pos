import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Dimensions,
  Alert,
  ScrollView,
} from 'react-native';

export default class Menuutama extends Component {
  render () {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />

        <View
          style={{
            flex: 1,
            alignSelf: 'center',
            flexDirection: 'column',
            paddingTop: 140,
          }}
        >
          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate ('home2')}
            >
              <View style={styles.image}>
                <Image
                  source={require ('../image/cashier.png')}
                  style={{height: 50, width: 50, marginTop: 8}}
                />
              </View>
            </TouchableOpacity>

            <Text style={styles.name}>KASIR</Text>
            <Text style={styles.count}>"alpha pos"</Text>
          </View>

          <View style={{paddingTop: 40}}>
            <TouchableOpacity
            // onPress={() => this.props.navigation.navigate ('home2')}
            >
              <View style={styles.image}>
                <Image
                  source={require ('../image/users.png')}
                  style={{height: 50, width: 50, marginTop: 8}}
                />
              </View>
            </TouchableOpacity>

            <Text style={styles.name}>AKUN</Text>
            <Text style={styles.count}>"alpha pos"</Text>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },

  cardContent: {
    marginLeft: 20,
    marginTop: 10,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    alignItems: 'center',
    paddingTop: 10,
    borderWidth: 2,
    borderColor: '#20b2AA',
  },

  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    borderWidth: 2,
    borderColor: '#20b2AA',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'column',
    borderRadius: 30,
  },

  name: {
    fontSize: 18,
    alignSelf: 'center',
    color: '#3399ff',
    fontWeight: 'bold',
    padding: 2,
  },
  count: {
    fontSize: 14,
    alignSelf: 'center',
    color: '#6666ff',
  },
  followButton: {
    marginTop: 10,
    height: 35,
    width: 100,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#20b2AA',
  },
  followButtonText: {
    color: '#dcdcdc',
    fontSize: 12,
  },
});
