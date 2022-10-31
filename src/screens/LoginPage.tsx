import React, { useState, useEffect } from 'react';
import {
  Image,
  Alert,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  ScrollView
} from 'react-native';
import styles from '../styles/AppStyle';
import { signIn } from '../services/api.services';
import { validateEmail } from '../helpers';

const LoginPage = (props: any) => {
  const { navigation } = props;
  const [firstRender, setFirstRender] = useState(true);
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [status, setStatus] = useState('');

  const [emailError, setEmailError] = useState<null | string>("")
  const [passwordError, setPasswordError] = useState<null | string>("")



  useEffect(() => {
    if (firstRender) {
      setFirstRender(false)
    }
    if (!firstRender) {
      if (!(passwordError === null || emailError === null)) {
        return;
      }

      setStatus('Checking Credentials....');
      signIn(user, pass)
        .then(() => {
          console.log('User account signed in!');
          navigation.navigate('AfterLogin');
        })
        .catch(error => {
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
            Alert.alert('Invalid Email');
          }
          if (error.code === 'auth/user-not-found') {
            Alert.alert('User Not Found!');
          }
        });
    }
  }, [emailError, passwordError])



  const doLogin = () => {
    if (user.length <= 0 || !validateEmail(user)) {
      if (user.length <= 0) {
        setEmailError('Email Missing')
      }
      else if (!validateEmail(user)) {
        setEmailError('Not a valid eMail')
      }
    } else {
      setEmailError(null)
    }
    if (pass.length <= 0) {
      setPasswordError('Password Missing')
    } else {
      setPasswordError(null)
    }
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
      <ScrollView style={styles.wrapper}>
        <View style={styles.loginBox}>
          <Text>Enter Existing Credentials to Login</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={[styles.input, !!emailError && styles.inputError]}
              placeholder="e-Mail"
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={text => {
                setUser(text);
              }}
            />
            {emailError && emailError.length > 0 && <Text style={styles.errorText}>{emailError}</Text>}
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={[styles.input, !!passwordError && styles.inputError]}
              placeholder="Password"
              textContentType="password"
              secureTextEntry={true}
              onChangeText={text => {
                setPass(text);
              }}
            />
            {passwordError && passwordError.length > 0 && <Text style={styles.errorText}>{passwordError}</Text>}
          </View>
          <Text>{status}</Text>
        </View>
        <View>
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
      </ScrollView>
    </View>
  );
};

export default LoginPage;
