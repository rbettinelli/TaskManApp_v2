import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LandingPageMain from './src/navigations/LandingPage';
import LoginPage from './src/screens/LoginPage';
import SignUpPage from './src/screens/SignUpPage';
import AfterLoginPage from './src/navigations/AfterLoginPage';
import auth from '@react-native-firebase/auth';
const MainStack = createNativeStackNavigator();



const App = () => {

  let initialRouteName = 'Landing';

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }


  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    initialRouteName = 'Landing';
  } else {
    initialRouteName = 'AfterLogin';
  }
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{
          headerShown: false,
        }}>
        {/* logged out pages */}
        <MainStack.Screen name="Landing" component={LandingPageMain} />
        <MainStack.Screen
          name="SignUp"
          component={SignUpPage}
          options={{ title: 'Create Account' }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginPage}
          options={{ title: 'Login' }}
        />

        {/* logged in pages */}
        <MainStack.Screen name="AfterLogin" component={AfterLoginPage} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
export default App;