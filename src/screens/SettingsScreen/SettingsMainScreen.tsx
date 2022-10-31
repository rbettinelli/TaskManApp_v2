import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SettingsMainScreen = () => {
  const [randomColor, setRandomColor] = useState('rgb(32,0,0)');

  const changeBackgroundColor = () => {
    let color = 'rgb(' + RND + ',' + RND + ',' + RND + ')';
    setRandomColor(color);
  };

  return (
    <SafeAreaView style={[styles.wrapper, { backgroundColor: randomColor }]}>
      <TouchableOpacity style={styles.topBox} onPress={changeBackgroundColor}>
        <Text style={styles.textStyle}>Change Background Color Randomly</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const RND = () => {
  return Math.floor(Math.random() * 256);
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  topBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomBox: {
    flex: 5,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 15,
    backgroundColor: '#03045e',
    padding: 10,
    color: '#caf0f8',
    borderRadius: 10,
  },
});
export default SettingsMainScreen;
