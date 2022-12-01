import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Alert, Button } from 'react-native';
import TextInputView from '../../components/TextInputView';
import PageHeader from '../../components/Header';
import styles from '../../styles/AppStyle';
import { useBackend } from '../../providers/BackendProvider';

const ListCreateScreen = ({ navigation }: any) => {
  const { userName, createList } = useBackend()
  const [listName, setListName] = useState<string>("")

  const addList = async () => {
    try {
      await createList(listName)
      Alert.alert("Confirm!", `${listName} Added!`, [{ text: "OK", onPress: () => navigation.goBack() }])
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <PageHeader>
        <Text style={styles.textTitle}>{`Task Manager - ${userName()}`} </Text>
      </PageHeader>
      <View style={styles.searchBox}>
        <Text style={styles.textStyle}>List Name:</Text>
        <TextInputView
          style={styles.input}
          placeholder="Enter List Name"
          onChangeText={setListName}
        />
        <View style={styles.loginBox}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={addList}>
            <Text style={styles.buttonFont}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.goBack()}>
            <Text style={styles.buttonFont}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ListCreateScreen;
