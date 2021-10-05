/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {View} from 'react-native';
import Landing from './screen/Landing';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <Landing />
      </View>
    </Provider>
  );
};

export default App;
