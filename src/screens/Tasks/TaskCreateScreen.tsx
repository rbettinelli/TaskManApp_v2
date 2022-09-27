import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import TextInputView from '../../components/TextInputView';
import PageHeader from '../../components/Header';
import styles from '../../styles/AppStyle';

const TaskCreateScreen = (props: any) => {
  const {route, navigation} = props;
  const {username} = route.params;

  return (
    <View style={styles.wrapper}>
      <PageHeader>
        <Text style={styles.textTitle}>Task Manager - {username} </Text>
      </PageHeader>
      <View style={styles.topBox}>
        <Text style={styles.textStyle}>Task Name:</Text>
        <TextInputView />
      </View>
      <View style={styles.loginBox}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('TaskMainScreen')}>
          <Text style={styles.buttonFont}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskCreateScreen;
