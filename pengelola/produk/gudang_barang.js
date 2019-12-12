//This is an example code to Add Search Bar Filter on Listview//
import React, {Component} from 'react';
//import react in our code.

import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
} from 'react-native';
import ActionButton from 'react-native-action-button';

class Gudangbarang extends Component {
  constructor (props) {
    super (props);
    //setting default state
    this.state = {isLoading: false, text: ''};
    this.arrayholder = [];
    this.state = {count: 0, coba: '', data: [], redux: props.increment};
  }

  componentDidMount = () => {
    return fetch ('https://peaceful-savannah-85788.herokuapp.com/api/product')
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
      const itemData = item.product_name
        ? item.product_name.toUpperCase ()
        : ''.toUpperCase ();
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
              <View style={styles.card}>
                <Text style={styles.textdiskripsi}>{item.brand}</Text>
                <Text style={styles.textdiskripsi}>{item.category_name}</Text>
                <View style={styles.textStyle}>
                  <Text>harga beli:</Text>
                  <Text>{item.buy_price}</Text>
                  <Text>harga jual:</Text>
                  <Text>
                    {item.sell_price}
                  </Text>
                </View>

              </View>
            )}
            enableEmptySections={true}
            style={{marginTop: 10}}
            keyExtractor={(item, index) => index.toString ()}
          />
          <ActionButton
            onPress={() => this.props.navigation.navigate ('tambahbarang')}
            buttonColor="rgba(231,76,60,1)"
          />

        </View>
      )
    );
  }
}

export default Gudangbarang;
const styles = StyleSheet.create ({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    padding: 15,
  },
  textStyle: {
    paddingTop: 10,
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
    paddingLeft: 15,
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
    width: 60,
    borderRadius: 30,
    backgroundColor: '#009688',
  },
});
