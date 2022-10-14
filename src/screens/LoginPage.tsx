import React, {useState} from 'react';
import {
  Image,
  Alert,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from 'react-native';
import styles from '../styles/AppStyle';
import {signIn} from '../services/api.services';
import {validateEmail} from '../helpers';

const LoginPage = (props: any) => {
  const {navigation} = props;
  const [user, setUser] = useState('none');
  const [pass, setPass] = useState('none');
  const [status, setStatus] = useState('');

  async function doLogin() {
    if (user.length <= 0) {
      Alert.alert('Email Missing');
      return;
    }
    if (!validateEmail(user)) {
      Alert.alert('Not a valid eMail');
      return;
    }
    if (pass.length <= 0) {
      Alert.alert('Password Missing');
      return;
    }
    setStatus('Checking Credentials....');
    signIn(user, pass)
      .then(() => {
        console.log('User account signed in!');
        navigation.navigate('AfterLogin', {username: user});
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          Alert.alert('Invalid Email');
        }
        Alert.alert('Error:$(error)');
      });
    return;
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.topBox}>
        <Image
          style={styles.imageDisplay}
          source={require('../assets/images/log.jpg')}
        />
      </View>
      <View>
        <Text style={styles.textTitle}>Task Manager v2.0</Text>
      </View>

      <View style={styles.loginBox}>
        <Text>Enter Existing Credentials to Login</Text>
        <TextInput
          style={styles.input}
          placeholder="e-Mail"
          textContentType="emailAddress"
          keyboardType="email-address"
          onChangeText={text => {
            setUser(text);
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          textContentType="password"
          secureTextEntry={true}
          onChangeText={text => {
            setPass(text);
          }}
        />
        <Text>{status}</Text>
      </View>
      <View style={styles.botBox}>
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
              doLogin();
            }}>
            <Text style={styles.buttonFont}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginPage;
