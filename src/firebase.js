import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA8ettsOob9QFVmTa1ZjdHLOWTsVjUQX-s",
    authDomain: "clone-cfc93.firebaseapp.com",
    databaseURL: "https://clone-cfc93.firebaseio.com",
    projectId: "clone-cfc93",
    storageBucket: "clone-cfc93.appspot.com",
    messagingSenderId: "236818455430",
    appId: "1:236818455430:web:eb76318e4dd9303df4ea07",
    measurementId: "G-WMMP4FNME2"
})

const auth = firebase.auth();

export { auth }