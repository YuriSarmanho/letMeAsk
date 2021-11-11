import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAq2g2YydBzXe13VIkjxRTPBCK-N2ZOtL4",
    authDomain: "letmeask-e1ed8.firebaseapp.com",
    databaseURL: "https://letmeask-e1ed8-default-rtdb.firebaseio.com",
    projectId: "letmeask-e1ed8",
    storageBucket: "letmeask-e1ed8.appspot.com",
    messagingSenderId: "573290355370",
    appId: "1:573290355370:web:b063794bc6eac3c4dc8ed3"
};

const app = firebase.initializeApp(firebaseConfig)



export {firebase}