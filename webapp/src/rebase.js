import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

var app = firebase.initializeApp({
    apiKey: "AIzaSyDB_0DoZyJRFaNcunu_pS_vY6-ImlYI8WA",
    authDomain: "soundguardian-8a7b3.firebaseapp.com",
    databaseURL: "https://soundguardian-8a7b3.firebaseio.com",
    projectId: "soundguardian-8a7b3",
    storageBucket: "soundguardian-8a7b3.appspot.com",
    messagingSenderId: "510412214541"
});

var db = firebase.database(app);
var base = Rebase.createClass(db);

export default base;
