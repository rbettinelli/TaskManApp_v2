import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Cell from '../../components/Cell';
import PlusButton from '../../components/PlusButton';
import PageHeader from '../../components/Header';
import styles from '../../styles/AppStyle';
import { userName } from '../../services/api.services';
const TaskMainScreen = (props: any) => {
  const { navigation } = props;

  // Replace this with API...
  const [taskList, settaskList] = useState([
    { name: 'Task 1', id: '1', selected: false },
    { name: 'Task 2', id: '2', selected: false },
    { name: 'Task 3', id: '3', selected: false },
    { name: 'Task 4', id: '4', selected: false },
    { name: 'Task 5', id: '5', selected: false },
  ]);

  const pressHandler = (name: string) => {
    console.log(name);
  };

  return (
    <View style={styles.wrapper}>
      <PageHeader>
        <Text style={styles.textTitle}>{`Task Manager - ${userName} `}</Text>
      </PageHeader>

      <View style={styles.plusBox}>
        <PlusButton onPress={() => navigation.navigate('TaskCreate')} />
      </View>
      <View style={styles.lists}>
        <FlatList
          data={taskList}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => pressHandler(item.name)}>
              <Cell label={item.name} checked={item.selected} />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default TaskMainScreen;
