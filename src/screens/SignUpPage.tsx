import React, {useState} from 'react';
import {
  Image,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Alert,
} from 'react-native';
import styles from '../styles/AppStyle';
import {signUpUser} from '../services/api.services';
import {validateEmail} from '../helpers';

const SignUpPage = (props: any) => {
  const {navigation} = props;
  const [user, setUser] = useState('none');
  const [pass, setPass] = useState('none');
  const [passC, setConfirmPass] = useState('none');
  const [status, setStatus] = useState('');

  async function doRegister() {
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
    if (passC.length <= 0) {
      Alert.alert('Confirm Password Missing');
      return;
    }
    if (pass !== passC) {
      Alert.alert('Passwords do not match');
      return;
    }

    setStatus('Registering....');
    signUpUser(user, pass)
      .then(() => {
        console.log('User account created & signed in!');
        Alert.alert('Success..Please Login.');
        navigation.push('Login');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          Alert.alert('Email Already in Use.');
        }
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
          <Text>Enter Credentials to Sign Up</Text>
          <TextInput
            style={styles.input}
            placeholder="e-Mail"
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
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
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            textContentType="password"
            secureTextEntry={true}
            onChangeText={text => {
              setConfirmPass(text);
            }}
          />
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
      </View>
    </View>
  );
};

export default SignUpPage;
