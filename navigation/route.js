import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Hal1 from '../src/select';
import Loginpengelola from '../pengelola/login';
import Loginkasir from '../kasir/login';
import Register from '../kasir/register';
import Home from '../pengelola/home';
import Home2 from '../kasir/home';
import Tambahbarang from '../pengelola/produk/tambah_barang';
import Layar2 from '../kasir/bayar';
import Redux from '../kasir/redux';
import Menuutama from '../kasir/menu utama';
import Gudangbarang from '../pengelola/produk/gudang_barang';
import Akun from '../pengelola/akun/akun';
import Editakun from '../pengelola/akun/edit akun';
import Store from '../pengelola/store/store';

const Route = createStackNavigator ({
  Select: {
    screen: Hal1,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Loginkasir: {
    screen: Loginkasir,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Loginpengelola: {
    screen: Loginpengelola,
    navigationOptions: () => ({
      header: null,
    }),
  },
  register: {
    screen: Register,
    navigationOptions: () => ({
      header: null,
    }),
  },
  home: {
    screen: Home,
    navigationOptions: () => ({
      header: null,
    }),
  },
  home2: {
    screen: Home2,
    navigationOptions: () => ({
      header: null,
    }),
  },
  tambahbarang: {
    screen: Tambahbarang,
    navigationOptions: () => ({
      header: null,
    }),
  },
  bayar: {
    screen: Layar2,
    navigationOptions: () => ({
      header: null,
    }),
  },
  redux: {
    screen: Redux,
    navigationOptions: () => ({
      header: null,
    }),
  },
  menuutama: {
    screen: Menuutama,
    navigationOptions: () => ({
      header: null,
    }),
  },
  gudang: {
    screen: Gudangbarang,
    navigationOptions: () => ({
      header: null,
    }),
  },
  akun: {
    screen: Akun,
    navigationOptions: () => ({
      header: null,
    }),
  },
  editakun: {
    screen: Editakun,
    navigationOptions: () => ({
      header: null,
    }),
  },
  store: {
    screen: Store,
    navigationOptions: () => ({
      header: null,
    }),
  },

  // tema: {
  //   screen: ThemeDemo,
  //   navigationOptions: () => ({
  //     header: null,
  //   }),
  // },
  // rating: {
  //   screen: App,
  //   navigationOptions: () => ({
  //     header: null,
  //   }),
  // },
  // setting: {
  //   screen: Setting,
  //   navigationOptions: () => ({
  //     header: null,
  //   }),
  // },
  // promo: {
  //   screen: Promo,
  //   navigationOptions: () => ({
  //     header: null,
  //   }),
  // },
  // profil: {
  //   screen: Profile,
  //   navigationOptions: () => ({
  //     header: null,
  //   }),
  // },
});

export default createAppContainer (Route);
