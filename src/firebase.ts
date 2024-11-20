import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAJW5fqJRso77IRNdCoweXNpJdIjLcP0aM",
  authDomain: "meta-academy-thales.firebaseapp.com",
  databaseURL: "https://meta-academy-thales-default-rtdb.firebaseio.com",
  projectId: "meta-academy-thales",
  storageBucket: "meta-academy-thales.firebasestorage.app",
  messagingSenderId: "198732379019",
  appId: "1:198732379019:web:c591153a1e7bacd108358e"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);