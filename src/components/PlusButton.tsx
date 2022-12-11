import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PlusButton = (props: any) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.addWrapper}>
        <Text style={styles.addText}>Add</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addWrapper: {
    width: 90,
    height:50,
    backgroundColor: '#9B5DE5',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#9B5DE5',
    borderWidth:1,
    textAlign: 'center',
    textAlignVertical: 'top',  
    padding: 0,
    alignContent: 'center',
  },
  addText: {
    padding: 0,
    fontSize:18,
    color:'#FFF',
    top: 0,
  },
});

export default PlusButton;
