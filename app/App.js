import React from 'react';
import { Provider } from 'react-redux';

import {
  SafeAreaView,
  ScrollView,
  StatusBar
} from 'react-native';

import store from './redux/store';
import ListScreen from './screens/ListScreen';


function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor="#005c42" />
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          style={{ backgroundColor: '#005c42'}}>
          <ListScreen />
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
