import auth from '@react-native-firebase/auth';

export class FirebaseCalls {

  signUpUser = async (
    email: string,
    password: string,
    userName: string
  ): Promise<any> => {
    console.log('here');
    return auth().createUserWithEmailAndPassword(email, password).then((user) => {
      user.user.updateProfile({
        displayName: userName
      })
    })
  }

  signIn = async (username: string, password: string): Promise<any> => {
    return auth().signInWithEmailAndPassword(username, password);
  }

  logout = (): Promise<any> => {
    return auth()
      .signOut()
  };

  userName = (): string => auth().currentUser?.displayName || "";
}
