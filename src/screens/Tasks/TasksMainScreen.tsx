import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, SafeAreaView, Alert } from 'react-native';
import Cell from '../../components/Cell';
import PlusButton from '../../components/PlusButton';
import PageHeader from '../../components/Header';
import styles from '../../styles/AppStyle';
import { useBackend } from '../../providers/BackendProvider';

const tasks: { [key: string]: any } = {
  list1: [
    { name: 'Task 1', id: '1', selected: false },
    { name: 'Task 2', id: '2', selected: false },
    { name: 'Task 3', id: '3', selected: false },
    { name: 'Task 4', id: '4', selected: false },
    { name: 'Task 5', id: '5', selected: false },
  ],
  list2: [
    { name: 'Task 10', id: '10', selected: false },
    { name: 'Task 20', id: '20', selected: false },
    { name: 'Task 30', id: '30', selected: false },
    { name: 'Task 40', id: '40', selected: false },
    { name: 'Task 50', id: '50', selected: false },
  ],
  list3: [
    { name: 'Task 100', id: '100', selected: false },
    { name: 'Task 200', id: '200', selected: false },
    { name: 'Task 300', id: '300', selected: false },
    { name: 'Task 400', id: '400', selected: false },
    { name: 'Task 500', id: '500', selected: false },
  ]
}
const TaskMainScreen = (props: any) => {
  const { navigation, route } = props;
  const { taskID } = route.params
  const { userName } = useBackend()

  // Replace this with API...
  const [taskList, settaskList] = useState<Array<any>>(tasks[taskID]);

  const pressHandler = (item: any) => {
    settaskList(taskList.map((task) => task.id == item.id ? { ...task, selected: !item.selected } : task))
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <PageHeader>
        <Text style={styles.textTitle}>{`Task Manager - ${(userName())} `}</Text>
      </PageHeader>

      <View style={styles.plusBox}>
        <PlusButton onPress={() => navigation.navigate('CreateTask')} />
      </View>
      <View style={styles.lists}>
        <FlatList
          data={taskList}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => pressHandler(item)}>
              <Cell label={item.name} checked={item.selected} />
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.loginBox}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.goBack()}>
          <Text style={styles.buttonFont}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TaskMainScreen;
