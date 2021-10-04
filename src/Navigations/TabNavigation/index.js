import React from 'react';
import {View, Text, Image} from 'react-native';
import CartScreen from '../../Screens/Cart';
import HomeScreen from '../../Screens/HomeScreen';
import ProfileScreen from '../../Screens/Profile';
import SearchScreen from '../../Screens/Search';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const TabNavgations = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2ECC71',
        tabBarInactiveTintColor: '#7F8C8D',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({size, focused, color}) => {
            if (focused) {
              return <Icon name="home-sharp" size={size} color={color} />;
            } else {
              return <Icon name="home-outline" size={size} color={color} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'ፈልግ',
          tabBarIcon: ({size, focused, color}) => {
            if (focused) {
              return <Icon name="search" size={size} color={color} />;
            } else {
              return <Icon name="search-outline" size={size} color={color} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'አካውንት',
          tabBarIcon: ({size, focused, color}) => {
            if (focused) {
              return <Icon name="person-sharp" size={size} color={color} />;
            } else {
              return <Icon name="person-outline" size={size} color={color} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: 'ጋሪ',
          tabBarIcon: ({size, focused, color}) => {
            if (focused) {
              return <Icon name="cart" size={size} color={color} />;
            } else {
              return <Icon name="cart-outline" size={size} color={color} />;
            }
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavgations;
