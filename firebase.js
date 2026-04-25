const firebaseConfig = {
  apiKey: "AIzaSyAbd6ROenW2rhPKMiMdrTsMmaVTPadD8vA",
  authDomain: "gaurabbakerystore.firebaseapp.com",
  projectId: "gaurabbakerystore",
  storageBucket: "gaurabbakerystore.firebasestorage.app",
  messagingSenderId: "791552304011",
  appId: "1:791552304011:web:042fbe000eb7ad6783458e"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();