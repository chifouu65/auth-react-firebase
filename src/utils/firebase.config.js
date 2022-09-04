import firebase from "firebase/compat/app";
import "firebase/compat/auth"

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "crud-4dec5.firebaseapp.com",
    projectId: "crud-4dec5",
    storageBucket: "crud-4dec5.appspot.com",
    messagingSenderId: "901476914351",
    appId: "1:901476914351:web:1efeec032c935595b9b05a",
});

export const auth = app.auth();
export default app;
