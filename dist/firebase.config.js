const firebaseConfig = {
    apiKey: "AIzaSyAheeFn0Y-121VVOtkrH90BaFFa7c6FKrw",
    authDomain: "findwhereiswaldo.firebaseapp.com",
    projectId: "findwhereiswaldo",
    storageBucket: "findwhereiswaldo.appspot.com",
    messagingSenderId: "373347374283",
    appId: "1:373347374283:web:9c05cb3f9a692f53d2374e",
    measurementId: "G-29B9TFRBBK"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.auth().signInAnonymously().then(()=>console.log('succesfull login!!')).catch(err=>console.log('error!!',err.code, err.message, err));