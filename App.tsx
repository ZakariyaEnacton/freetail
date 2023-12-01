import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Header from './src/components/Header';
import Home from './src/screens/Home';
import {Provider} from 'react-redux';
import store from './src/Redux/store';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaView className="bg-[#FCF5ED] flex-1">
        <View className="px-2">
          <Home />
        </View>
      </SafeAreaView>
    </Provider>
  );
}

export default App;
