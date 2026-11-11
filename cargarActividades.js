import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAM9WixjYzGJ57Twd79tm-DPlwwrfoZpk0",
  authDomain: "saludlaboral-5b944.firebaseapp.com",
  projectId: "saludlaboral-5b944",
  storageBucket: "saludlaboral-5b944.firebasestorage.app",
  messagingSenderId: "797162139743",
  appId: "1:797162139743:web:3c8981d12de7e5085eabea"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("Firebase conectado");
