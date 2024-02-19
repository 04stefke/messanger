import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyD_HaI1zgSpwjCDtojHPsyp91dyuUjQXKo",
    authDomain: "allchat-f72cf.firebaseapp.com",
    projectId: "allchat-f72cf",
    storageBucket: "allchat-f72cf.appspot.com",
    messagingSenderId: "817962144650",
    appId: "1:817962144650:web:c505fdf4591284b77dae73"
  };


export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const storage = getStorage();

export const db = getFirestore(app)