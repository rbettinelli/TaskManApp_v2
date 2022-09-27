import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const PlusButton = (props: any) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.addWrapper}>
        <Text style={styles.addText}>+</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#03045e',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  addText: {
    padding: 0,
    fontSize: 50,
    color: '#caf0f8',
    top: -7,
  },
});

export default PlusButton;
