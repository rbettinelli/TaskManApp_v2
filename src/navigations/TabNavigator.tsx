import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsMainScreen from '../screens/SettingsScreen/SettingsMainScreen';
import StatisticsMainScreen from '../screens/Statistics/StatisticsMainScreen';
import ListNavigator from './ListNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={ListNavigator}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="list" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={StatisticsMainScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="bar-chart" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsMainScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="settings" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
