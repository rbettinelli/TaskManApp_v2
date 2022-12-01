import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Progress from 'react-native-progress';
import { useBackend } from '../../providers/BackendProvider';
import { useIsFocused } from '@react-navigation/native';

const StatisticsMainScreen = () => {
  const isFocused = useIsFocused();
  const { getAllLists, getAllTasksForList, getAllTasks } = useBackend()
  const [listList, setlistList] = useState<any[]>([]);
  const [tasksList, setTasksList] = useState<any[]>([]);
  const [totalCompletedPercentage, setTotalCompletedPercentage] = useState<string>("0")


  useEffect(() => {
    const getLists = async () => {
      let listArr: any[] = []
      try {
        const lists = await getAllLists()
        lists.forEach(async (list: any) => {
          const tasks = await getAllTasksForList(list.id)
          listArr = listArr.concat({
            ...list.data(),
            listID: list.id,
            totalTasks: tasks.size,
            completedTasks: tasks.docs.filter((task: any) => task.data().isCompleted).length
          })
          setlistList(listArr);

        })
      } catch (error) {
        console.log(error);
      }
    }
    getLists()
  }, [isFocused])

  useEffect(() => {
    const getTasks = async () => {
      let tasksArr: any[] = []
      try {
        const tasksResponse = await getAllTasks()
        tasksResponse.forEach((task: any) => {
          tasksArr = tasksArr.concat({ ...task.data() })
        })
        setTasksList(tasksArr);
      } catch (error) {
        console.log(error);
      }
    }
    getTasks()
  }, [isFocused])

  useEffect(() => {
    console.log(tasksList.filter((task: any) => task.isCompleted).length / tasksList.length);
    if (tasksList && tasksList.length > 0) {
      setTotalCompletedPercentage(((tasksList.filter((task: any) => task.isCompleted).length / tasksList.length) * 100).toFixed(2))
    }
  }, [tasksList])

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.topBox}>
        <Text style={styles.h1}>{totalCompletedPercentage}%</Text>
      </View>
      <View style={styles.bottomBox}>

        <FlatList
          data={listList}
          keyExtractor={item => item.listID}
          renderItem={({ item }) => (
            <View style={styles.progressBarContainer}>
              <Text style={styles.statsTaskHeading}>{item.listName}</Text>
              <Progress.Bar progress={item.totalTasks ? item.completedTasks / item.totalTasks : 0.0} width={300} />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  h1: {
    fontSize: 100,
  },
  topBox: {
    flex: 1,
    padding: 10,
    alignSelf: 'center',
  },
  bottomBox: {
    flex: 3,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 30,
  },
  progressBarContainer: {
    margin: 20
  },
  statsTaskHeading: {
    fontSize: 25,
    marginVertical: 10
  }
});
export default StatisticsMainScreen;
