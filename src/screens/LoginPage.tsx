import React, {useState} from 'react';
import {Image, TouchableOpacity, View, Text, TextInput} from 'react-native';
import styles from '../styles/AppStyle';
import {signInAsync} from '../services/api.services';

const LoginPage = (props: any) => {
  const {navigation} = props;
  const [user, setUser] = useState('none');
  const [pass, setPass] = useState('none');
  const [status, setStatus] = useState('');

  async function doLogin() {
    const result = await signInAsync(user, pass);
    if (result === 'SUCCESS') {
      setStatus('Login!');
      navigation.navigate('AfterLogin', {username: user});
    } else {
      setStatus(result);
    }

    //Search Function.
    /*     var sp = 'spg_getUser';
    var myMap = new Map();
    myMap.set('user', user);
    myMap.set('pass', pass);
    var url = CallJson(sp, myMap);
    console.log(url);

    const [responses, isError, isLoading] = useFetch<JSON>(url);

    if (isLoading) {
      console.log('Loading');
    }
    if (isError) {
      console.log('Error');
    }
    var resp = responses;
    console.log(resp);
    console.log(text);
    navigation.navigate('AfterLogin', {username: user}); */
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
