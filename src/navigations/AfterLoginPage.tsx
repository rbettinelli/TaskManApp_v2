import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LogoutTab from '../screens/LogoutTab';
import TaskMainScreen from '../screens/Tasks/TasksMainScreen';
import TaskCreateScreen from '../screens/Tasks/TaskCreateScreen';
import ListCreateScreen from '../screens/Lists/ListCreateScreen';
import ListMainScreen from '../screens/Lists/ListMainScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tabs = createBottomTabNavigator();
Icon.loadFont();

const AfterLoginPage = (props: any) => {
  const {route} = props;
  const {username} = route.params;
  const un = username;

  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="route-tMain"
        component={TaskMainScreen}
        initialParams={{username: un}}
        options={{
          title: 'Task Main',
          tabBarIcon: ({color}) => (
            <Icon name="format-list-group" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="route-tCreate"
        component={TaskCreateScreen}
        initialParams={{username: un}}
        options={{
          title: 'Task Create',
          tabBarIcon: ({color}) => (
            <Icon name="format-list-checks" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="route-lMain"
        component={ListMainScreen}
        initialParams={{username: un}}
        options={{
          title: 'List Main',
          tabBarIcon: ({color}) => (
            <Icon name="list-status" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="route-lCreate"
        component={ListCreateScreen}
        initialParams={{username: un}}
        options={{
          title: 'List Create',
          tabBarIcon: ({color}) => (
            <Icon name="format-list-checkbox" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="route-logout"
        component={LogoutTab}
        initialParams={{username: un}}
        options={{
          title: 'Logout',
          tabBarIcon: ({color}) => (
            <Icon name="logout" size={24} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default AfterLoginPage;
