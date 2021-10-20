import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAOZ2nU2KHR795O522tyhlJIH-UDI9x224",
  authDomain: "typeenma.firebaseapp.com",
  projectId: "typeenma",
  storageBucket: "typeenma.appspot.com",
  messagingSenderId: "685011434472",
  appId: "1:685011434472:web:94e0937df10dcaa826425d",
  measurementId: "G-266CEQRSRN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
// const googleProvider = new firebase.auth.GoogleAuthProvider();
// const signInWithGoogle = async () => {
//   try {
//     const res = await auth.signInWithPopup(googleProvider);
//     const user = res.user;
//     const query = await db
//       .collection("users")
//       .where("uid", "==", user.uid)
//       .get();
//     if (query.docs.length === 0) {
//       await db.collection("users").add({
//         uid: user.uid,
//         name: user.displayName,
//         authProvider: "google",
//         email: user.email,
//       });
//     }
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };
const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
// const registerWithEmailAndPassword = async (name, email, password) => {
//   try {
//     const res = await auth.createUserWithEmailAndPassword(email, password);
//     const user = res.user;
//     await db.collection("users").add({
//       uid: user.uid,
//       name,
//       authProvider: "local",
//       email,
//     });
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };
const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  auth.signOut();
};
export {
  auth,
//   signInWithGoogle,
  signInWithEmailAndPassword,
//   registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
}