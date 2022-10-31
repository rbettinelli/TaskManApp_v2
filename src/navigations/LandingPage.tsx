import React from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import styles from '../styles/AppStyle';

const LandingPageMain = (props: any) => {
  const { navigation } = props;

  return (
    <View style={styles.wrapper}>
      <View style={styles.openPageBox}>
        <Image
          style={styles.imageDisplay}
          source={require('../assets/images/taskmgr.gif')}
        />
      </View>
      <View>
        <Text style={styles.textTitle}>Task Manager v2.0</Text>
      </View>
      <View style={styles.botBox}>
        <View style={styles.navButtonsWrapper}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.push('SignUp');
            }}>
            <Text style={styles.buttonFont}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.push('Login');
            }}>
            <Text style={styles.buttonFont}>Logon</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LandingPageMain;
