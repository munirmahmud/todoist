import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDYRiiURgjGNrJaxxSR_DxiRQQcwOqwCN8",
    authDomain: "todoist-react-app-ec566.firebaseapp.com",
    databaseURL: "https://todoist-react-app-ec566.firebaseio.com",
    projectId: "todoist-react-app-ec566",
    storageBucket: "todoist-react-app-ec566.appspot.com",
    messagingSenderId: "697688677330",
    appId: "1:697688677330:web:d5bdda46031308311f060b"
});


export { firebaseConfig as firebase };

