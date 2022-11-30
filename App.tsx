import React, { createContext, useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LandingPageMain from './src/navigations/LandingPage';
import LoginPage from './src/screens/LoginPage';
import SignUpPage from './src/screens/SignUpPage';
import AfterLoginPage from './src/navigations/AfterLoginPage';
import auth from '@react-native-firebase/auth';
import TaskCreateScreen from './src/screens/Tasks/TaskCreateScreen';
import ListCreateScreen from './src/screens/Lists/ListCreateScreen';
import TaskMainScreen from './src/screens/Tasks/TasksMainScreen';
import BackendProvider from './src/providers/BackendProvider';
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
      <BackendProvider>
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
          <MainStack.Screen name="CreateTask" component={TaskCreateScreen} />
          <MainStack.Screen name="CreateList" component={ListCreateScreen} />
          <MainStack.Screen name="TaskMain" component={TaskMainScreen} />
        </MainStack.Navigator>
      </BackendProvider>
    </NavigationContainer>
  );
}
export default App;