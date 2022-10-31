import React, { useEffect, useState } from 'react';
import {
  Image,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
import styles from '../styles/AppStyle';
import { signUpUser } from '../services/api.services';
import { validateEmail } from '../helpers';

const SignUpPage = (props: any) => {
  const [firstRender, setFirstRender] = useState(true);
  const { navigation } = props;
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [passC, setConfirmPass] = useState('');
  const [status, setStatus] = useState('');


  const [nameError, setNameError] = useState<null | string>("")
  const [emailError, setEmailError] = useState<null | string>("")
  const [passwordError, setPasswordError] = useState<null | string>("")
  const [confrimPasswordError, setConfirmPasswordError] = useState<null | string>("")

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false)
    }
    if (!firstRender) {
      if (!(passwordError === null || confrimPasswordError === null || nameError === null || emailError === null)) {
        return;
      }
      setStatus('Registering....');
      signUpUser(email, pass, user)
        .then(() => {
          Alert.alert('Success..Please Login.');
          navigation.push('Login');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('Email Already in Use.');
          }
          if (error.code === 'auth/invalid-email') {
            Alert.alert('Invalid Email');
          }
          console.log(error);

          Alert.alert(`Error: ${error}`);
        });
    }
  }, [emailError, passwordError, nameError, confrimPasswordError])

  const doRegister = () => {
    if (user.length <= 0) {
      setNameError('Name Missing')
    } else {
      setNameError(null)
    }
    if (email.length <= 0 || !validateEmail(email)) {
      if (email.length <= 0) {
        setEmailError('Email Missing')
      }
      else if (!validateEmail(email)) {
        setEmailError('Not a valid eMail')
      }
    } else {
      setEmailError('')
    }
    if (pass.length <= 0) {
      setPasswordError('Password Missing')
    } else {
      setPasswordError('')
    }
    if (passC.length <= 0 || pass !== passC) {
      if (passC.length <= 0) {
        setConfirmPasswordError('Confirm Password Missing')
      }
      else if (pass !== passC) {
        setConfirmPasswordError('Passwords do not match');
      }
    } else {
      setConfirmPasswordError('')
    }
  }

  return (
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
      <ScrollView style={styles.wrapper}>
        <View style={styles.loginBox}>
          <Text>Enter Credentials to Sign Up</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={[styles.input, !!nameError && styles.inputError]}
              placeholder="Name"
              textContentType="givenName"
              keyboardType="default"
              onChangeText={text => {
                setUser(text);
              }}
            />
            {nameError && nameError.length > 0 && <Text style={styles.errorText}>{nameError}</Text>}
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={[styles.input, !!emailError && styles.inputError]}
              placeholder="e-Mail"
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={text => {
                setEmail(text);
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
          <View style={styles.inputWrapper}>
            <TextInput
              style={[styles.input, !!confrimPasswordError && styles.inputError]}
              placeholder="Confirm Password"
              textContentType="password"
              secureTextEntry={true}
              onChangeText={text => {
                setConfirmPass(text);
              }}
            />
            {confrimPasswordError && confrimPasswordError.length > 0 && <Text style={styles.errorText}>{confrimPasswordError}</Text>}
          </View>
          <Text>{status}</Text>
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
              doRegister();
            }}>
            <Text style={styles.buttonFont}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView >
    </View >
  );
};

export default SignUpPage;
