
// ./src/services/firebase.js
import firebase from "firebase"
import "firebase/firestore"

var config = {
  apiKey: "AIzaSyBbZPYp82-LYQmGJbSJvCiucX-WFsMAfIY",
  authDomain: "mlb2019-9ba20.firebaseapp.com",
  databaseURL: "https://mlb2019-9ba20.firebaseio.com",
  projectId: "mlb2019-9ba20",
  storageBucket: "mlb2019-9ba20.appspot.com",
  messagingSenderId: "124549714915"
};

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.database = firebase.database();
    this.auth = firebase.auth
  }

  glossary = (term) => {
    return this.database.ref(`/glossary/${term.toLowerCase()}`).once('value').then(function(snapshot) {
      return snapshot.val();
    });
  }
}

export default new Firebase();