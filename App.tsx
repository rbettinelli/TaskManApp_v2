import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LandingPageMain from './src/navigations/LandingPage';
import LoginPage from './src/screens/LoginPage';
import SignUpPage from './src/screens/SignUpPage';
import AfterLoginPage from './src/navigations/AfterLoginPage';

const MainStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Landing"
        screenOptions={{
          headerShown: false,
        }}>
        {/* logged out pages */}
        <MainStack.Screen name="Landing" component={LandingPageMain} />
        <MainStack.Screen
          name="SignUp"
          component={SignUpPage}
          options={{title: 'Create Account'}}
        />
        <MainStack.Screen
          name="Login"
          component={LoginPage}
          options={{title: 'Login'}}
        />

        {/* logged in pages */}
        <MainStack.Screen name="AfterLogin" component={AfterLoginPage} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
