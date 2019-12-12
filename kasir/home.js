//This is an example code to Add Search Bar Filter on Listview//
import React, {Component} from 'react';
//import react in our code.

import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  Image,
  Modal,
  FlatList,
  TextInput,
  ActivityIndicator,
  AsyncStorage,
  Alert,
  TouchableOpacity,
} from 'react-native';

//import all the components we are going to use.

export default class Home2 extends Component {
  constructor (props) {
    super (props);
    //setting default state
    this.state = {isLoading: false, text: ''};
    this.arrayholder = [];
    this.state = {
      count: 0,
      coba: 0,
      id: '',
      nama: '',
      deskripsi: '',
      data: [],
      modal: false,
      bayar: '',
      redux: props.increment,
    };
  }
  increment = () => {
    this.setState ({
      count: this.state.count + 1,
    });
  };
  decrement = () => {
    this.setState ({
      count: this.state.count - 1,
    });
  };
  kurang = () => {
    this.setState ({
      coba: this.state.coba / 2,
      count: this.state.count - 1,
    });
  };

  filterharga (hasil) {
    const newData = this;
  }

  onButtomDetail = dataItem => {
    this.props.navigation.navigate ('bayar', {coba: dataItem});
  };
  functionone () {
    this.increment ();
  }
  functiontwo = () => {
    this.decrement ();
  };

  thefunction = () => {
    this.functionone ();
  };

  componentDidMount = () => {
    return fetch ('https://alitacarla.000webhostapp.com/POS/list_toko.json')
      .then (response => response.json ())
      .then (responseJson => {
        this.setState (
          {
            isLoading: false,
            dataSource: responseJson,
          },
          function () {
            this.arrayholder = responseJson;
          }
        );
      })
      .catch (error => {
        console.error (error);
      });
  };

  SearchFilterFunction (text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter (function (item) {
      //applying filter for the inserted text in search bar
      const itemData = item.nama ? item.nama.toUpperCase () : ''.toUpperCase ();
      const textData = text.toUpperCase ();
      return itemData.indexOf (textData) > -1;
    });
    this.setState ({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      text: text,
    });
  }
  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          width: '90%',
          backgroundColor: '#080808',
        }}
      />
    );
  };
  render () {
    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{flex: 1, paddingTop: 10}}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      //ListView to show with textinput used as search bar
      (
        <View style={styles.viewStyle}>
          <TouchableOpacity
            onPress={() => {
              this.setState ({modal: true});
            }}
          >
            <View style={styles.bayarbarang}>
              <Text style={{color: '#fff'}}>
                bayar
              </Text>
            </View>
          </TouchableOpacity>

          <TextInput
            style={styles.textInputStyle}
            onChangeText={text => this.SearchFilterFunction (text)}
            value={this.state.text}
            underlineColorAndroid="transparent"
            placeholder="Search Here"
          />

          <FlatList
            data={this.state.dataSource}
            horizontal={false}
            numColumns={2}
            ItemSeparatorComponent={this.ListViewItemSeparator}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  this.setState (
                    prevState => ({
                      coba: prevState.coba + item.harga,
                      id: prevState.id + item.userId,
                      nama: prevState.nama + item.nama,
                      deskripsi: prevState.deskripsi + item.diskripsi,
                    }),
                    () => {
                      console.log ('Update state', this.state.coba);
                    }
                  ) || this.thefunction ();
                }}
                style={styles.card}
              >
                <View style={{paddingLeft: 15}}>
                  <Text style={styles.textdiskripsi}>{item.nama}</Text>
                  <Text style={styles.textdiskripsi}>{item.diskripsi}</Text>
                  <Text style={styles.textStyle}>
                    {item.harga}
                  </Text>

                </View>
              </TouchableOpacity>
            )}
            enableEmptySections={true}
            style={{marginTop: 10}}
            keyExtractor={(item, index) => index.toString ()}
          />
          {/* <ActionButton
            onPress={() => this.props.navigation.navigate ('tambahbarang')}
            buttonColor="rgba(231,76,60,1)"
          /> */}

          <TouchableOpacity onPress={this.kurang}>
            <View style={styles.kurangbarang}>
              <Text style={{color: '#fff'}}>
                kurangi
              </Text>
            </View>
          </TouchableOpacity>

          <View style={{flexDirection: 'row'}}>
            <View style={styles.jumlahbarang}>
              <Text style={{color: '#fff'}}>
                jumlah barang :
              </Text>
              <Text style={{color: '#fff'}}>
                {this.state.count}
              </Text>
            </View>

            <View style={{paddingLeft: 100, paddingTop: 10}}>
              <Text style={{color: '#000'}}>
                {this.state.coba}
              </Text>
            </View>
          </View>

          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modal}
          >
            <View
              style={{
                height: '100%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#009688',
              }}
            >
              <View>
                <View style={styles.card2}>
                  <View style={styles.image}>
                    <Image
                      source={require ('../image/cashier.png')}
                      style={{height: 50, width: 50, marginTop: 8}}
                    />
                  </View>
                  <View style={styles.cardContent}>

                    <Text style={styles.name}>{this.state.nama}</Text>

                    <Text style={styles.count}>{this.state.coba}</Text>

                  </View>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    this.setState ({modal: false});
                  }}
                >
                  <Text>
                    ok
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

        </View>
      )
    );
  }
}
// const mapstatetoprops = state => ({
//   count: state.count,
// });

// const maptchprops = dispact => ({
//   increment: () => dispact ({type: 'increment', payload: 5}),
//   decrement: () => dispact ({type: 'decrement'}),
// });

const styles = StyleSheet.create ({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    padding: 15,
  },
  textStyle: {
    paddingTop: 10,
  },
  cardContent: {
    marginLeft: 20,
    flexDirection: 'column',
    marginTop: 10,
  },
  name: {
    fontSize: 18,
    color: '#3399ff',
    fontWeight: 'bold',
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
  card2: {
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
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    borderRadius: 30,
  },
  textdiskripsi: {
    paddingBottom: 2,
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
    borderRadius: 20,
    marginVertical: 5,
    backgroundColor: 'white',
    flexBasis: '46%',
    marginHorizontal: 5,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
  jumlahbarang: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 140,
    borderRadius: 30,
    backgroundColor: '#009688',
  },
  bayarbarang: {
    height: 45,

    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 90,
    borderRadius: 30,
    backgroundColor: '#009688',
  },
  kurangbarang: {
    height: 45,

    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 90,
    borderRadius: 30,
    backgroundColor: '#009688',
  },
});
