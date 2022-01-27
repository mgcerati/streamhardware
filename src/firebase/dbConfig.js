// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnpt9eQpK1YepzE8VKTFF7-ZXKj0YSJ_E",
  authDomain: "streamhardware.firebaseapp.com",
  projectId: "streamhardware",
  storageBucket: "streamhardware.appspot.com",
  messagingSenderId: "562301371989",
  appId: "1:562301371989:web:152f6befd51299dbb376dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app
}