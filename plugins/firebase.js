// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApTkmoc1FVXV86Mj_DT7rvcAprTMLBvkE",
  authDomain: "accounts-5a1e9.firebaseapp.com",
  projectId: "accounts-5a1e9",
  storageBucket: "accounts-5a1e9.appspot.com",
  messagingSenderId: "953444857220",
  appId: "1:953444857220:web:933b9657f9ce01afc559d1",
  measurementId: "G-B1W0FFBTSX"
};

export default defineNuxtPlugin(() => {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
});
