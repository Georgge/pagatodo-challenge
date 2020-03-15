import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import store from './redux/store';
import InitialScreen from './screens/InitialScreen';


function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          headerMode="screen"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#005c42',
              borderBottomColor: '#005c42',
              shadowRadius: 0,
              shadowOffset: {
                height: 0,
              }
            }
          }}>
          <Stack.Screen
            name="Home"
            component={InitialScreen}
            options={{ title: 'Challenge' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
