import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';

export default class Layar2 extends React.Component {
  render () {
    return (
      <View>
        <ScrollView>
          <View style={styles.contantainer}>
            <Text style={styles.titleArtikel}>
              {this.props.navigation.state.params.detil[2]}
            </Text>

          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  titleArtikel: {
    fontSize: 25,
    color: '#000000',
  },
  lokasiPenulis: {
    fontSize: 10,
    marginBottom: 20,
    paddingLeft: 5,
  },
  ukuranGambar: {
    height: 200,
    width: '80%',
    marginBottom: 4,
  },
  viewImages: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tampilanArtikel: {
    fontSize: 15,
    textAlign: 'auto',
  },
});
