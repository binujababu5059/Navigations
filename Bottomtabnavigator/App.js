import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './screens/Home';
import Updates from './screens/Updates';
import Profile from './screens/Profile';


const Tab = createBottomTabNavigator();

export default function () {
  return (
    <NavigationContainer>
      <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarActiveTintColor: '#e91e63',
          }}  >
              <Tab.Screen
                name="Home"
                component={Home}
                options={{
                  tabBarLabel: 'Home',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                  ),
                }}
              />
              <Tab.Screen
                name="Updates"
                component={Updates}
                options={{
                  tabBarLabel: 'Updates',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="bell" color={color} size={size} />
                  ),
                  tabBarBadge: 3,
                }}
              />
              <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                  tabBarLabel: 'Profile',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                  ),
                }}
              />
      </Tab.Navigator>
    </NavigationContainer>
  );
}