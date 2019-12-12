import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  StatusBar,
  AsyncStorage,
  Dimensions,
  Alert,
  ScrollView,
} from 'react-native';

export default class Akun extends Component {
  constructor (props) {
    super (props);
    this.state = {
      modalVisible: false,
      userSelected: [],
      data: [
        {
          id: 1,
          name: 'Comunity',
          image: 'https://img.icons8.com/clouds/100/000000/groups.png',
          count: 124.711,
        },
        {
          id: 2,
          name: 'Housing',
          image: 'https://img.icons8.com/color/100/000000/real-estate.png',
          count: 234.722,
        },
        {
          id: 3,
          name: 'Jobs',
          image: 'https://img.icons8.com/color/100/000000/find-matching-job.png',
          count: 324.723,
        },
        {
          id: 4,
          name: 'Personal',
          image: 'https://img.icons8.com/clouds/100/000000/employee-card.png',
          count: 154.573,
        },
        {
          id: 5,
          name: 'For sale',
          image: 'https://img.icons8.com/color/100/000000/land-sales.png',
          count: 124.678,
        },
      ],
    };
  }
  out = () => {
    AsyncStorage.removeItem ('access_token');
    AsyncStorage.removeItem ('id');
    AsyncStorage.removeItem ('username');
    AsyncStorage.removeItem ('email');

    this.props.navigation.navigate ('Select');
  };

  clickEventListener = item => {
    Alert.alert ('Message', 'Item clicked. ' + item.name);
  };

  render () {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        {/* 
        <TouchableOpacity
          //   onPress={() => this.props.navigation.navigate ('home2')}
          style={styles.card}
        >
          <View style={styles.image}>
            <Image
              source={require ('../image/bill.png')}
              style={{height: 50, width: 50, marginTop: 8}}
            />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.name}>STRUCK</Text>
            <Text style={styles.count}>"alpha pos"</Text>

          </View>
        </TouchableOpacity> */}

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate ('editakun')}
          style={styles.card}
        >
          <View style={styles.image}>
            <Image
              source={require ('../../image/document.png')}
              style={{height: 50, width: 50, marginTop: 8}}
            />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.name}>Edit</Text>
            <Text style={styles.count}>"alpha pos"</Text>

          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.out ()} style={styles.card}>

          <View style={styles.image}>
            <Image
              source={require ('../../image/logout.png')}
              style={{height: 50, width: 50, marginTop: 8}}
            />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.name}>Logout</Text>
            <Text style={styles.count}>"alpha pos"</Text>

          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  contentList: {
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
    flexDirection: 'row',
    borderRadius: 30,
  },

  name: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: '#3399ff',
    fontWeight: 'bold',
    padding: 2,
  },
  count: {
    fontSize: 14,
    flex: 1,
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
