import React from 'react';
import {Image, TouchableOpacity, View, Text, TextInput} from 'react-native';
import styles from '../styles/AppStyle';

const SignUpPage = (props: any) => {
  const {navigation} = props;

  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapper}>
        <View style={styles.topBox}>
          <Image
            style={styles.imageDisplay}
            source={require('../assets/images/signup.jpg')}
          />
        </View>
        <View>
          <Text style={styles.textTitle}>Task Manager v2.0</Text>
        </View>
        <View style={styles.loginBox}>
          <TextInput
            style={styles.input}
            placeholder="e-Mail"
            textContentType="emailAddress"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            textContentType="password"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.navButtonsWrapper}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.goBack();
            }}>
            <Text style={styles.buttonFont}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.push('Login');
            }}>
            <Text style={styles.buttonFont}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUpPage;
