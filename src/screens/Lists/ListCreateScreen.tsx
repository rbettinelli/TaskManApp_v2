import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import TextInputView from '../../components/TextInputView';
import PageHeader from '../../components/Header';
import styles from '../../styles/AppStyle';
import { useBackend } from '../../providers/BackendProvider';

const ListCreateScreen = ({ navigation }: any) => {
  const { userName } = useBackend()

  const setQuery = (text: string) => {
    //Search Function.
    console.log(text);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <PageHeader>
        <Text style={styles.textTitle}>{`Task Manager - ${userName()}`} </Text>
      </PageHeader>
      <View style={styles.searchBox}>
        <Text style={styles.textStyle}>List Name:</Text>
        <TextInputView
          style={styles.input}
          placeholder="Create List"
          onChangeText={(text: string) => setQuery(text)}
        />
        <View style={styles.loginBox}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => Alert.alert("go back to task list")}>
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
