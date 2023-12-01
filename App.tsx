import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Home from './src/screens/Home';
import {Provider} from 'react-redux';
import store from './src/Redux/store';
import AppNavigator from './src/AppNavigator';

function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

export default App;
