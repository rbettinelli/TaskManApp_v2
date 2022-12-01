import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const COLLECTIONS = {
  lists: "Lists",
  tasks: "Tasks"
}

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
    }).catch((e) => { throw new Error(e) })
  }

  signIn = async (username: string, password: string): Promise<any> => {
    return auth().signInWithEmailAndPassword(username, password);
  }

  logout = (): Promise<any> => {
    return auth()
      .signOut()
  };

  userName = (): string => auth().currentUser?.displayName || "";

  email = (): string => auth().currentUser?.email || "";

  createList = (listName: string): Promise<any> => {
    return firestore()
      .collection(COLLECTIONS.lists)
      .add({
        listName: listName,
        email: this.email()
      }).then(() => {
        console.log("Added");
      }).catch((e) => { throw new Error(e) })
  }
  createTask = (taskName: string, isCompleted: boolean, listId: string): Promise<any> => {
    return firestore()
      .collection(COLLECTIONS.tasks)
      .add({
        taskName: taskName,
        isCompleted: isCompleted,
        email: this.email(),
        listId: listId
      }).then(() => {
        console.log("Added");
      }).catch((e) => { throw new Error(e) })
  }
  updateTask = (taskID: string, isCompleted: boolean): Promise<any> => {
    return firestore()
      .collection(COLLECTIONS.tasks)
      .doc(taskID)
      .update({
        isCompleted: isCompleted,
      })
      .then(() => {
        console.log('Task updated!');
      }).catch((e) => { throw new Error(e) });
  }
  getAllLists = (): Promise<any> => {
    return firestore().collection(COLLECTIONS.lists).where("email", "==", this.email()).get()
  }
  getAllTasks = (listId: string): Promise<any> => {
    console.log(listId);

    return firestore().collection(COLLECTIONS.tasks).where("email", "==", this.email()).where("listId", "==", listId).get()
  }
}
