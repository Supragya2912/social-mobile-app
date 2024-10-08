import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigator from './src/components/BottomNavigator';
// import { RootStackParamList } from './src/types/navigation';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BottomNavigator"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}>
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
