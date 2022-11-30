import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import TextInputView from '../../components/TextInputView';
import PageHeader from '../../components/Header';
import styles from '../../styles/AppStyle';
import { useBackend } from '../../providers/BackendProvider';

const TaskCreateScreen = (props: any) => {
  const { navigation } = props;
  const { userName } = useBackend()

  return (
    <SafeAreaView style={styles.wrapper}>
      <PageHeader>
        <Text style={styles.textTitle}>{`Task Manager - ${userName()} `}</Text>
      </PageHeader>
      <View style={styles.topBox}>
        <Text style={styles.textStyle}>Task Name:</Text>
        <TextInputView style={styles.input}
          placeholder="Create Task" />
      </View>
      <View style={styles.loginBox}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Alert.alert("go back to task list")}>
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
