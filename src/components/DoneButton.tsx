import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function DoneButton(props: {
  title:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  return (
    <TouchableOpacity>
      <View style={styles.addWrapper}>
        <Text style={styles.addText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addWrapper: {
    width: 120,
    height: 30,
    backgroundColor: '#03045e',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    textAlign: 'center',
  },
  addText: {
    fontSize: 20,
    color: '#caf0f8',
  },
});

export default DoneButton;
