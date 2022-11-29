import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LogoutTab from '../screens/LogoutTab';
import TaskMainScreen from '../screens/Tasks/TasksMainScreen';
import TaskCreateScreen from '../screens/Tasks/TaskCreateScreen';
import ListCreateScreen from '../screens/Lists/ListCreateScreen';
import ListMainScreen from '../screens/Lists/ListMainScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StatisticsMainScreen from '../screens/Statistics/StatisticsMainScreen';
const Tabs = createBottomTabNavigator();
Icon.loadFont();

const AfterLoginPage = () => {
  return (
    <Tabs.Navigator screenOptions={{
      headerShown: false,
    }}>
      {/* <Tabs.Screen
        name="route-tMain"
        component={TaskMainScreen}
        options={{
          title: 'Task Main',
          tabBarIcon: ({ color }) => (
            <Icon name="format-list-group" size={24} color={color} />
          ),
        }}
      /> */}
      {/* <Tabs.Screen
        name="route-tCreate"
        component={TaskCreateScreen}
        options={{
          title: 'Task Create',
          tabBarIcon: ({ color }) => (
            <Icon name="format-list-checks" size={24} color={color} />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="route-lMain"
        component={ListMainScreen}
        options={{
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
            return <Icon name="bar-chart" color={color} />;
          },
        }}
      />
      {/* <Tabs.Screen
        name="route-lCreate"
        component={ListCreateScreen}
        options={{
          title: 'List Create',
          tabBarIcon: ({ color }) => (
            <Icon name="format-list-checkbox" size={24} color={color} />
          ),
        }}
      /> */}
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
