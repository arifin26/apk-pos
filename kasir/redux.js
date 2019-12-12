import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Home2 from '../kasir/home';

const initialstate = {
  count: 0,
};

const reducer = (state = initialstate, action) => {
  // console.log (action);

  switch (action.type) {
    case 'increment':
      return {
        count: state.count + 1,
      };
    case 'decrement':
      return {
        count: state.count - 1,
      };
  }
  return state;
};

const store = createStore (reducer);
class Redux extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Home2 />
      </Provider>
    );
  }
}
export default Redux;
