import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './routes';

import {Provider} from 'react-redux';
import store from './redux/reducer';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#ff0000" />
      <Routes />
    </Provider>
  );
};

export default App;
