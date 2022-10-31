import React from 'react';
import { View, Text, TextInput } from 'react-native';
import PageHeader from '../components/Header';
import styles from '../styles/AppStyle';
import { userName } from '../services/api.services';
const SearchTab = () => {
  const setQuery = (text: string) => {
    //Search Function.
    console.log(text);
  };

  return (
    <View style={styles.wrapper}>
      <PageHeader>
        <Text style={styles.textTitle}>{`Task Manager - ${userName}`}</Text>
      </PageHeader>
      <View style={styles.searchBox}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          onChangeText={text => setQuery(text)}
        />
      </View>
    </View>
  );
};

export default SearchTab;
