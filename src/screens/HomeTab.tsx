import React from 'react';
import {View, Text} from 'react-native';
import PageHeader from '../components/Header';
import styles from '../styles/AppStyle';

const HomeTab = (props: any) => {
  const {route, navigation} = props;
  const {username} = route.params;

  return (
    <View style={styles.wrapper}>
      <PageHeader>
        <Text style={styles.textTitle}>Task Manager - {username} </Text>
      </PageHeader>
      <Text> Task Manager .. Your easy 'to do' manager. </Text>
    </View>
  );
};

export default HomeTab;
