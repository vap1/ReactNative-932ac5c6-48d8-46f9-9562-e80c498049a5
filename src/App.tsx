
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContextProvider } from './contexts/AuthContext';
import AppNavigator from './navigation/AppNavigator';

const Stack = createStackNavigator();

const App: React.FC = () => {
  console.log('App component rendered');

  return (
    <AuthContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AppNavigator" component={AppNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContextProvider>
  );
};

export default App;