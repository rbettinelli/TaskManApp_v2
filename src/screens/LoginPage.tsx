import React from 'react';
import {
  Image,
  Alert,
  View,
  Text,
  TextInput,
  ScrollView,
  Button,
  SafeAreaView
} from 'react-native';
import styles from '../styles/AppStyle';
import { useBackend } from '../providers/BackendProvider';

import { Formik, ErrorMessage } from 'formik';
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Too Short!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required')
});


const LoginPage = (props: any) => {
  const { signIn } = useBackend()

  const { navigation } = props;

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.topBox}>
        <Image
          style={styles.imageDisplay}
          source={require('../assets/images/login.png')}
        />
      </View>
      <View>
        <Text style={styles.textHeader}>Task Manager v2.0</Text>
      </View>
      <ScrollView>
        <View style={styles.loginBox}>
          <Text style={styles.textStyle}>Enter Existing Credentials to Login</Text>
          <Formik
            validateOnChange={false}
            validateOnBlur={false}
            initialValues={{
              password: '',
              email: ''
            }}
            validationSchema={loginSchema}
            onSubmit={values => {
              // same shape as initial values
              const { email, password } = values
              signIn(email, password)
                .then(() => {
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
            }}>
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <View style={styles.wrapper}>
                <View style={styles.inputWrapper}>
                  <TextInput
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType="email-address"
                    placeholder="e-Mail"
                    textContentType="emailAddress"
                    autoCapitalize="none"
                    style={[styles.input, !!errors.email && styles.inputError]}
                  />
                  <Text style={styles.errorText}>
                    <ErrorMessage name="email" />
                  </Text>
                </View>
                <View style={styles.inputWrapper}>
                  <TextInput
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    placeholder="Password"
                    textContentType="password"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    style={[styles.input, !!errors.password && styles.inputError]}
                  />
                  <Text style={styles.errorText}>
                    <ErrorMessage name="password" />
                  </Text>
                </View>
                <Button title='Sign In' onPress={handleSubmit} />
              </View>
            )}
          </Formik>
        </View>
        <View>
          <View style={styles.navButtonsWrapper}>
            <Text>Don't have an account?</Text>
            <Button title='Sign Up' onPress={() => { navigation.navigate('SignUp') }} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginPage;
