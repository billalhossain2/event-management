// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOvCjAMEfkMgxZE5NxC5gBnAmGtnM5-wE",
  authDomain: "eventmastershub.firebaseapp.com",
  projectId: "eventmastershub",
  storageBucket: "eventmastershub.appspot.com",
  messagingSenderId: "448835333922",
  appId: "1:448835333922:web:123af8a950926d91b5ff7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;