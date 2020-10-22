import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyDYn0_9O19YQjkyKPKKI6ZvRKebiLrFokI',
    authDomain: 'ecommerce-8722d.firebaseapp.com',
    databaseURL: 'https://ecommerce-8722d.firebaseio.com',
    projectId: 'ecommerce-8722d',
    storageBucket: 'ecommerce-8722d.appspot.com',
    messagingSenderId: '871243877550',
    appId: '1:871243877550:web:f78b7db75c876c23d9b13f',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
