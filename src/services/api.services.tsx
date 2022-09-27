import {sleep} from '../helpers';

const USER = 'Moos';
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

export async function signUpPr(
  username: string,
  password: string,
): Promise<any> {
  await sleep(2000);
  return new Promise((resolve, reject) => {
    if (username === USER && password === PASS) {
      const successObject = {
        msg: 'Success',
      };
      resolve(successObject);
    } else {
      const errorObject = {
        msg: 'An error occurred',
      };
      reject(errorObject);
    }
  });
}
export async function signInAsync(username: string, password: string) {
  await sleep(2000);
  if (username === USER && password === PASS) {
    return 'SUCCESS';
  } else {
    return 'Login Failed';
  }
}
