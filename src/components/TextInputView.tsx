import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/AppStyle';

const CustomTextInput = (props: any) => {
  return (
    <TouchableOpacity>
      <View>
        <TextInput style={styles.input} placeholder={props.placeHolder} />
      </View>
    </TouchableOpacity>
  );
};

export default CustomTextInput;
