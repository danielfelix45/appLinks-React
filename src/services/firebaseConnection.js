import { initializeApp } from "firebase/app"; // Inicializar a configuração do firebase
import { getFirestore } from 'firebase/firestore'; // banco de dados
import { getAuth } from 'firebase/auth'; //Sistema de autenticação do usuário

const firebaseConfig = {
  apiKey: "AIzaSyDxTwXDuEZDVo4SeaY5JDx1lfurX72nJ2Y",
  authDomain: "applink-4b86a.firebaseapp.com",
  projectId: "applink-4b86a",
  storageBucket: "applink-4b86a.appspot.com",
  messagingSenderId: "754627426470",
  appId: "1:754627426470:web:a37cabd548c67890d71c67",
  measurementId: "G-3041500YQD"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp); // Iniciaizar conexão com o banco de dados
const auth = getAuth(firebaseApp); // Inicializando config com o sistema de autenticação

export { db, auth };
