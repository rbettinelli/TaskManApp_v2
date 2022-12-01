import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import Cell from '../../components/Cell';
import PlusButton from '../../components/PlusButton';
import PageHeader from '../../components/Header';
import styles from '../../styles/AppStyle';
import { useBackend } from '../../providers/BackendProvider';

const TaskMainScreen = (props: any) => {
  const { navigation, route } = props;
  const { listID } = route.params
  const { userName, getAllTasks, updateTask } = useBackend()
  const [taskList, settaskList] = useState<Array<any>>([]);

  const pressHandler = async (item: any) => {
    try {
      await updateTask(item.taskID, !item.isCompleted)
      settaskList(taskList.map((task) => task.taskID == item.taskID ? { ...task, isCompleted: !item.isCompleted } : task))
    } catch (error) {
      console.log(error);

    }
  };

  useEffect(() => {
    const getTasks = async () => {
      let listArr: any[] = []
      try {
        const lists = await getAllTasks(listID)
        lists.forEach((list: any) => {
          listArr = listArr.concat({ ...list.data(), taskID: list.id })
          console.log("Asdasda", listArr);

          settaskList(listArr)
        })
      } catch (error) {
        console.log(error);
      }
    }
    getTasks()
  }, [])

  return (
    <SafeAreaView style={styles.wrapper}>
      <PageHeader>
        <Text style={styles.textTitle}>{`Task Manager - ${(userName())} `}</Text>
      </PageHeader>

      <View style={styles.plusBox}>
        <PlusButton onPress={() => navigation.navigate('CreateTask', { listID: listID })} />
      </View>
      <View style={styles.lists}>
        <FlatList
          data={taskList}
          keyExtractor={item => item.taskID}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => pressHandler(item)}>
              <Cell label={item.taskName} checked={item.isCompleted} />
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
