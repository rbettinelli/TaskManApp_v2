import React from 'react';
import { Image, TouchableOpacity, View, Text, Alert, SafeAreaView } from 'react-native';
import PageHeader from '../components/Header';
import { useBackend } from '../providers/BackendProvider';
import styles from '../styles/AppStyle';
const LogoutTab = (props: any) => {
  const { navigation } = props;
  const { logout, userName } = useBackend()

  const signOut = () => {
    logout().then(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    })
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <PageHeader>
        <Text style={styles.textTitle}>{`Task Manager - ${userName()}`} </Text>
      </PageHeader>
      <View style={styles.topBox}>
        <Image
          style={styles.imageDisplay}
          source={require('../assets/images/logout.png')}
        />
      </View>
      <View style={styles.loginBox}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            Alert.alert('Logout', 'Are you Sure?', [
              {
                text: 'Yes',
                onPress: () => {
                  signOut();
                },
              },
              {
                text: 'No',
                onPress: () => {
                  console.log('User reject');
                },
              },
            ]);
          }}>
          <Text style={styles.buttonFont}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LogoutTab;
