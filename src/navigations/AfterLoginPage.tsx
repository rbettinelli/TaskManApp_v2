import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LogoutTab from '../screens/LogoutTab';
import ListMainScreen from '../screens/Lists/ListMainScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StatisticsMainScreen from '../screens/Statistics/StatisticsMainScreen';
const Tabs = createBottomTabNavigator();

const AfterLoginPage = () => {
  return (
    <Tabs.Navigator screenOptions={{
      tabBarActiveTintColor: '#9B5DE5',
      headerShown: false,
    }}>
      <Tabs.Screen
        name="route-lMain"
        component={ListMainScreen}
        options={{
          // tabBarActiveTintColor = '#9B5DE5',
          title: 'List Main',
          tabBarIcon: ({ color }) => (
            <Icon name="list-status" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Statistics"
        component={StatisticsMainScreen}
        options={{
          title: 'Stats',
          tabBarIcon: ({ color }: any) => {
            return <Icon name="chart-bar" color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="route-logout"
        component={LogoutTab}
        options={{
          title: 'Logout',
          tabBarIcon: ({ color }) => (
            <Icon name="logout" size={24} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default AfterLoginPage;
