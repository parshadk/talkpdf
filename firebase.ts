import {getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage } from "firebase/storage";
 

const firebaseConfig = {
    apiKey: "AIzaSyD8Kv_XRconkXIAoJSmoI_TM8MmLm44lPo",
    authDomain: "talkpdf-50079.firebaseapp.com",
    projectId: "talkpdf-50079",
    storageBucket: "talkpdf-50079.firebasestorage.app",
    messagingSenderId: "787661423825",
    appId: "1:787661423825:web:c870f388de6bc245eeb1f0",
    measurementId: "G-WXRKF13MF3"
  };

const app= getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db =getFirestore(app);
const storage = getStorage(app);


export {db, storage};
