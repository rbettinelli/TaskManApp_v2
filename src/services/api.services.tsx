import {sleep} from '../helpers';
import auth from '@react-native-firebase/auth';

const USER = 'Task';
const PASS = '123';

export async function signUp(
  username: string,
  password: string,
  callback: any,
) {
  await sleep(2000);
  if (username === USER && password === PASS) {
    callback('SUCCESS');
  } else {
    callback('Login Failed');
  }
}

export async function signUpUser(
  username: string,
  password: string,
): Promise<any> {
  return auth().createUserWithEmailAndPassword(username, password);
}

export async function signIn(username: string, password: string): Promise<any> {
  return auth().signInWithEmailAndPassword(username, password);
}
