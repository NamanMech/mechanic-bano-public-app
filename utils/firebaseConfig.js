// src/utils/firebaseConfig.js
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBc1bRjPiMC0LCCht-wZGTDY5RTLC_Eo0U",
  authDomain: "mechanicbanopublic.firebaseapp.com",
  projectId: "mechanicbanopublic",
  storageBucket: "mechanicbanopublic.firebasestorage.app",
  messagingSenderId: "303726026304",
  appId: "1:303726026304:web:7db40b059ff042252209a5"
};

export const firebaseApp = initializeApp(firebaseConfig);
