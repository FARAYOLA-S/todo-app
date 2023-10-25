import { initializeApp } from 'firebase/app';
import {getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCD5pgLSPLiO1-IQaHHkc8VGdvIYeBZmw8",
    authDomain: "nextjs-todo-app-3b2f6.firebaseapp.com",
    projectId: "nextjs-todo-app-3b2f6",
    storageBucket: "nextjs-todo-app-3b2f6.appspot.com",
    messagingSenderId: "313808237369",
    appId: "1:313808237369:web:7b0119fe9c350d339b6ee8"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)