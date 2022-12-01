import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import TextInputView from '../../components/TextInputView';
import PageHeader from '../../components/Header';
import styles from '../../styles/AppStyle';
import { useBackend } from '../../providers/BackendProvider';

const TaskCreateScreen = (props: any) => {
  const { navigation, route } = props;
  const { listID } = route.params
  const { userName, createTask } = useBackend()
  const [taskName, setTaskName] = useState<string>("")

  const addTask = async () => {
    try {
      await createTask(taskName, false, listID)
      Alert.alert("Confirm!", `${taskName} Added!`, [{ text: "OK", onPress: () => navigation.goBack() }])
    } catch (error) {
      console.log(error);

    }
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <PageHeader>
        <Text style={styles.textTitle}>{`Task Manager - ${userName()} `}</Text>
      </PageHeader>
      <View style={styles.topBox}>
        <Text style={styles.textStyle}>Task Name:</Text>
        <TextInputView
          style={styles.input}
          placeholder="Enter Task Name"
          onChangeText={setTaskName} />
      </View>
      <View style={styles.loginBox}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={addTask}>
          <Text style={styles.buttonFont}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginBox}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.goBack()}>
          <Text style={styles.buttonFont}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TaskCreateScreen;
