import React from 'react';
import { View, Text } from 'react-native';
import PageHeader from '../components/Header';
import styles from '../styles/AppStyle';
import { userName } from '../services/api.services';
const HomeTab = (props: any) => {
  return (
    <View style={styles.wrapper}>
      <PageHeader>
        <Text style={styles.textTitle}>{`Task Manager - ${userName()}`} </Text>
      </PageHeader>
      <Text> Task Manager .. Your easy 'to do' manager. </Text>
    </View>
  );
};

export default HomeTab;
