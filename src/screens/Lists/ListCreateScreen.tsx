import React from 'react';
import {View, Text} from 'react-native';
import TextInputView from '../../components/TextInputView';
import PageHeader from '../../components/Header';
import styles from '../../styles/AppStyle';

// const Stack = createStackNavigator();

const ListCreateScreen = (props: any) => {
  const {route} = props;
  const {username} = route.params;

  const setQuery = (text: string) => {
    //Search Function.
    console.log(text);
  };

  return (
    <View style={styles.wrapper}>
      <PageHeader>
        <Text style={styles.textTitle}>Task Manager - {username} </Text>
      </PageHeader>
      <View style={styles.searchBox}>
        <Text style={styles.textStyle}>List Name:</Text>
        <TextInputView
          style={styles.input}
          placeholder="Search..."
          onChangeText={(text: string) => setQuery(text)}
        />
      </View>
    </View>
  );
};

export default ListCreateScreen;
