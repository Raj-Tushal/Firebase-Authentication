import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js'
 import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

 const firebaseConfig = {
    apiKey: "AIzaSyDx2XOhDxHK1QocXpmnGhhOyn8EaiGpfoY",
    authDomain: "raj-app-131f0.firebaseapp.com",
    projectId: "raj-app-131f0",
    storageBucket: "raj-app-131f0.appspot.com",
    messagingSenderId: "166977870484",
    appId: "1:166977870484:web:62128f8531b047c064b281"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export{
    getAuth,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     onAuthStateChanged,
     signOut,
     sendEmailVerification
  }

