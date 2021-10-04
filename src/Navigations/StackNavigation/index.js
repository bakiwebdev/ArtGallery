import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';
import HomeScreen from '../../Screens/HomeScreen';
import StartUpScreen from '../../Screens/StartUpScreen';
import TabNavgations from '../TabNavigation';

const IndexNaviagtions = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator 
    initialRouteName="StartUp"
    screenOptions ={{
        headerShown: false,
    }}>
      <Stack.Screen name="StartUp" component={StartUpScreen} />
      <Stack.Screen name="Main" component={TabNavgations} />
    </Stack.Navigator>
  );
};

export default IndexNaviagtions;
