// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB2mYU92pkcv2MnSDM566yoG_FcHTo1S4U',
  authDomain: 'chef-recipe-hunter-fd7a9.firebaseapp.com',
  projectId: 'chef-recipe-hunter-fd7a9',
  storageBucket: 'chef-recipe-hunter-fd7a9.appspot.com',
  messagingSenderId: '1039681914638',
  appId: '1:1039681914638:web:ab9346b2a8986eda4b395f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;