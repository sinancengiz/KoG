import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/createStore';
import {View} from 'react-native';
import Landing from './screen/Landing';

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
