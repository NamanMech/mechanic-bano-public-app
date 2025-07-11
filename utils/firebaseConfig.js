import firebase from 'firebase'; // ✅ Full import works best in Snack

const firebaseConfig = {
  apiKey: "AIzaSyBc1bRjPiMC0LCCht-wZGTDY5RTLC_Eo0U",
  authDomain: "mechanicbanopublic.firebaseapp.com",
  projectId: "mechanicbanopublic",
  storageBucket: "mechanicbanopublic.appspot.com",
  messagingSenderId: "303726026304",
  appId: "1:303726026304:web:7db40b059ff042252209a5"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
