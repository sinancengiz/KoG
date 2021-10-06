import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/createStore';
import AppContainer from './navigation/appContainer';

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
