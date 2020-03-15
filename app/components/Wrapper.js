import React from 'react';

import { View, StatusBar } from 'react-native';
import Header from './Header';

function Wrapper({
  children, title, subtitle
}) {
  return (
    <View style={{ flex: 1, backgroundColor: '#005c42' }}>
      <StatusBar backgroundColor="#005c42" barStyle="light-content" />

      { children }
    </View>
  );
}

export default Wrapper;
