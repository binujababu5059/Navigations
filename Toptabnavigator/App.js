import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Updates from './screens/Updates';
import Profile from './screens/Profile';


const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: 'powderblue' },
          }} >
            <Tab.Screen
              name="Home"
              component={Home}
              options={{ tabBarLabel: 'Home' }}
            />
            <Tab.Screen
              name="Updates"
              component={Updates}
              options={{ tabBarLabel: 'Updates' }}
            />
            <Tab.Screen
              name="Profile"
              component={Profile}
              options={{ tabBarLabel: 'Profile' }}
            />
      </Tab.Navigator>
    </NavigationContainer>
  );
}