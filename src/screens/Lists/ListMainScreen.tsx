import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import CellList from '../../components/CellList';
import PlusButton from '../../components/PlusButton';
import PageHeader from '../../components/Header';
import styles from '../../styles/AppStyle';
import { useBackend } from '../../providers/BackendProvider';
const ListMainScreenBusiness = (props: any) => {
  const { navigation } = props;
  const { userName } = useBackend()

  // Replace this with API...
  const [listList, setlistList] = useState([
    { name: 'List 1', id: '1' },
    { name: 'List 2', id: '2' },
    { name: 'List 3', id: '3' },
    { name: 'List 4', id: '4' },
    { name: 'List 5', id: '5' },
  ]);

  const pressHandler = (list: any) => {
    navigation.navigate("TaskMain", { taskID: `list${list.id}` })
    console.log(list.id);
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
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => pressHandler(item)}>
              <CellList label={item.name} details={'0/0'} />
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default ListMainScreenBusiness;
