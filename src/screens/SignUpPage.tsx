import React from 'react';
import {
  Image,
  View,
  Text,
  Alert,
  ScrollView,
  Button,
  TextInput,
  SafeAreaView,
} from 'react-native';
import styles from '../styles/AppStyle';
import { useBackend } from '../providers/BackendProvider';

import { Formik, ErrorMessage } from 'formik';
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  user: Yup.string()
    .required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required')
});


const SignUpPage = (props: any) => {
  const { signUpUser } = useBackend()
  const { navigation } = props;

  return (
    <SafeAreaView style={styles.wrapper}>
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
          <Text style={styles.textStyle}>Enter Credentials to Sign Up</Text>
          <Formik
            validateOnChange={false}
            validateOnBlur={false}
            initialValues={{
              user: '',
              password: '',
              email: '',
              passwordConfirmation: ''
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
              // same shape as initial values
              const { email, password, user } = values
              signUpUser(email, password, user)
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
                });
            }}>
            {({ handleBlur, handleChange, handleSubmit, values, errors }) => (
              <View style={styles.wrapper}>
                <View style={styles.inputWrapper}>
                  <TextInput
                    onChangeText={handleChange('user')}
                    onBlur={handleBlur('user')}
                    value={values.user}
                    placeholder="User Name"
                    style={[styles.input, !!errors.user && styles.inputError]}
                  />
                  <Text style={styles.errorText}>
                    <ErrorMessage name="user" />
                  </Text>
                </View>
                <View style={styles.inputWrapper}>
                  <TextInput
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType="email-address"
                    placeholder="e-Mail"
                    textContentType="emailAddress"
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
                    style={[styles.input, !!errors.password && styles.inputError]}
                  />
                  <Text style={styles.errorText}>
                    <ErrorMessage name="password" />
                  </Text>
                </View>
                <View style={styles.inputWrapper}>
                  <TextInput
                    onChangeText={handleChange('passwordConfirmation')}
                    onBlur={handleBlur('passwordConfirmation')}
                    value={values.passwordConfirmation}
                    placeholder="Confirm Password"
                    textContentType="password"
                    secureTextEntry={true}
                    style={[styles.input, !!errors.passwordConfirmation && styles.inputError]}
                  />
                  <Text style={styles.errorText}>
                    <ErrorMessage name="passwordConfirmation" />
                  </Text>
                </View>
                <Button title='Sign Up' onPress={handleSubmit}></Button>
              </View>
            )}
          </Formik>
        </View>
        <View style={styles.navButtonsWrapper}>
          <View style={styles.navButtonsWrapper}>
            <Text>Already have an account?</Text>
            <Button title='Sign In' onPress={() => { navigation.navigate('Login') }} />
          </View>
        </View>
      </ScrollView >
    </SafeAreaView >
  );
};

export default SignUpPage;
