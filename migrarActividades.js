import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "saludlaboral-5b944.firebaseapp.com",
  projectId: "saludlaboral-5b944",
  storageBucket: "saludlaboral-5b944.firebasestorage.app",
  messagingSenderId: "797162139743",
  appId: "1:797162139743:web:3c8981d12de7e5085eabea"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Aquí pegaremos las 17 actividades
const actividadesData = [];

async function migrar() {
  for (const actividad of actividadesData) {
    await addDoc(
      collection(db, "Actividades"),
      actividad
    );
  }

  document.body.innerHTML =
    "<h1>Migración completada</h1>";
}

migrar();