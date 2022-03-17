import firebase from 'firebase/compat/app'

let firebaseConfig = {}

export let app = firebase.initializeApp(firebaseConfig);
export let auth = app.auth