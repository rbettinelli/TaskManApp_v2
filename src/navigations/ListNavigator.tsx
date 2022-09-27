import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TaskCreateScreen from '../screens/Tasks/TaskCreateScreen';
import TaskMainScreen from '../screens/Tasks/TasksMainScreen';
import ListCreateScreen from '../screens/Lists/ListCreateScreen';
import ListMainScreen from '../screens/Lists/ListMainScreen';

export default function ListNavigator() {
  const ListStack = createStackNavigator();
  // const { Navigator, Screen } = ListStack
  return (
    <ListStack.Navigator screenOptions={{headerShown: false}}>
      <ListStack.Screen name="ListMainScreen" component={ListMainScreen} />
      <ListStack.Screen name="ListCreate" component={ListCreateScreen} />
      <ListStack.Screen name="TaskMainScreen" component={TaskMainScreen} />
      <ListStack.Screen name="TaskCreate" component={TaskCreateScreen} />
    </ListStack.Navigator>
  );
}
