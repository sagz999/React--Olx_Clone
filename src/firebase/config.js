import firebase from 'firebase'
import 'firebase/auth' 
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyB1fglFoRT7zTURhx3dp4gnQy_olcSgP30",
  authDomain: "fir-9f706.firebaseapp.com",
  projectId: "fir-9f706",
  storageBucket: "fir-9f706.appspot.com",
  messagingSenderId: "906003839606",
  appId: "1:906003839606:web:78da475e6e0cca64ee3d57",
  measurementId: "G-JQDX8B0S28"
};

export default firebase.initializeApp(firebaseConfig)