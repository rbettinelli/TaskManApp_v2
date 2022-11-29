import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/AppStyle';

const CustomTextInput = (props: any) => {
  return (
    <View style={styles.inputWrapper}>
      <TextInput style={styles.input} placeholder={props.placeholder} />
    </View>
  );
};

export default CustomTextInput;
