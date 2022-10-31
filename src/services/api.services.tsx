import auth from '@react-native-firebase/auth';

export const signUpUser = async (
  email: string,
  password: string,
  userName: string
): Promise<any> => {
  return auth().createUserWithEmailAndPassword(email, password).then((user) => {
    user.user.updateProfile({
      displayName: userName
    })
  })
}

export const signIn = async (username: string, password: string): Promise<any> => {
  return auth().signInWithEmailAndPassword(username, password);
}

export const Logout = (): Promise<any> => {
  return auth()
    .signOut()
};

export const userName = auth().currentUser?.displayName
