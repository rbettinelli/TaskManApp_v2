import React from 'react';
import { View, Text } from 'react-native';
import PageHeader from '../components/Header';
import { useBackend } from '../providers/BackendProvider';
import styles from '../styles/AppStyle';
const HomeTab = (props: any) => {
  const { userName } = useBackend()
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
