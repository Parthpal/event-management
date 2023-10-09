// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0cCKAqqdDFnX9bBtRYHd63zWA2Zczz-8",
  authDomain: "event-manage-project-63e55.firebaseapp.com",
  projectId: "event-manage-project-63e55",
  storageBucket: "event-manage-project-63e55.appspot.com",
  messagingSenderId: "964065616842",
  appId: "1:964065616842:web:fed95fa46b69b6e19f2533"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;