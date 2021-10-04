import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import IndexNaviagtions from './StackNavigation';

const AppNavigations = () => {
  return (
    <NavigationContainer>
      <IndexNaviagtions />
    </NavigationContainer>
  );
};

export default AppNavigations;
