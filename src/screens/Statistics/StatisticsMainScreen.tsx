import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as Progress from 'react-native-progress';

const StatisticsMainScreen = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.topBox}>
        <Text style={styles.h1}>%50</Text>
      </View>
      <View style={styles.bottomBox}>
        <Text style={styles.textStyle}> List 1</Text>
        <Progress.Bar progress={0.7} width={300} />

        <Text style={styles.textStyle}> List 2</Text>
        <Progress.Bar progress={0.5} width={300} />

        <Text style={styles.textStyle}> List 3</Text>
        <Progress.Bar progress={0.3} width={300} />
        <Text style={styles.textStyle}> List 4</Text>
        <Progress.Bar progress={0.5} width={300} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  h1: {
    fontSize: 100,
  },
  topBox: {
    flex: 1,
    padding: 10,
    alignSelf: 'center',
  },
  bottomBox: {
    flex: 3,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 30,
  },
});
export default StatisticsMainScreen;
