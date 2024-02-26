import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGING_SENDERID,
  appId: import.meta.env.VITE_REACT_APP_ID
  };


export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const storage = getStorage();

export const db = getFirestore(app)