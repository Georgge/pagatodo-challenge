import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import store from './redux/store';
import InitialScreen from './screens/InitialScreen';
import ListScreen from './screens/ListScreen';


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
            },
            headerTitleStyle: {
              color: 'white',
              fontWeight: 'bold',
              textTransform: 'uppercase',
            }
          }}>
          <Stack.Screen
            name="Home"
            component={InitialScreen}
            options={{ title: 'Challenge' }}
          />
          <Stack.Screen
            name="List"
            component={ListScreen}
            options={{ title: 'Bancos' }}        
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
