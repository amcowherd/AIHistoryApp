import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0nix5oC_SixNALjIdolvrAhtIu-i2t_Q",
  authDomain: "aihistory-516d6.firebaseapp.com",
  projectId: "aihistory-516d6",
  storageBucket: "aihistory-516d6.firebasestorage.app",
  messagingSenderId: "574357748437",
  appId: "1:574357748437:web:914f87e19d235af695005c"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
