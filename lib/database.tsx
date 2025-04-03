import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Configurazione di Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAr4n73WUfPmbnxY2gZmRoSKniSE2ESQSs",
  authDomain: "aps-limbiate.firebaseapp.com",
  projectId: "aps-limbiate",
  storageBucket: "aps-limbiate.firebasestorage.app",
  messagingSenderId: "856484974649",
  appId: "1:856484974649:web:fb4e625e8e5914eb3cbde8",
  measurementId: "G-2CKZJHRECW"
};

// Inizializzazione di Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Inizializzazione di Firestore
const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);

// Esportazione solo di `db` per gestire i dati di Firestore
export { db, auth };
