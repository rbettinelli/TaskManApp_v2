import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import CellList from '../../components/CellList';
import PlusButton from '../../components/PlusButton';
import PageHeader from '../../components/Header';
import styles from '../../styles/AppStyle';
import { useBackend } from '../../providers/BackendProvider';
import { useIsFocused } from '@react-navigation/native';

const ListMainScreenBusiness = (props: any) => {
  const isFocused = useIsFocused();
  const { navigation } = props;
  const { userName, getAllLists, getAllTasksForList } = useBackend()
  const [listList, setlistList] = useState<any[]>([]);


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
          setlistList(listArr)
        })
      } catch (error) {
        console.log(error);
      }
    }
    getLists()
  }, [isFocused])

  const pressHandler = (list: any) => {
    navigation.navigate("TaskMain", { listID: list.listID })
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <PageHeader>
        <Text style={styles.textTitle}>{`Task Manager - ${userName()}`} </Text>
      </PageHeader>

      <View style={styles.plusBox}>
        <PlusButton onPress={() => navigation.navigate('CreateList')} />
      </View>
      <View style={styles.lists}>
        <FlatList
          data={listList}
          keyExtractor={item => item.listID}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => pressHandler(item)}>
              <CellList label={item.listName} details={`${item.completedTasks}/${item.totalTasks}`} />
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default ListMainScreenBusiness;
