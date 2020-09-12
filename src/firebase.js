

  import firebase from"firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCr0pEpczfA97jz0XWLDltlHoquo5qlDUo",
    authDomain: "todo-app-cp-86dd8.firebaseapp.com",
    databaseURL: "https://todo-app-cp-86dd8.firebaseio.com",
    projectId: "todo-app-cp-86dd8",
    storageBucket: "todo-app-cp-86dd8.appspot.com",
    messagingSenderId: "107750369529",
    appId: "1:107750369529:web:3b274b661bafaa8c421a28",
    measurementId: "G-2094NY89J1"
});

   const db = firebaseApp.firestore();

   export default db ;

