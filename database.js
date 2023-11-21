

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js';
import { getDatabase, ref, push } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js';

const firebaseConfig = {
    apiKey: "AIzaSyDABxRv7TeJCvrJqJxpdK-WAvqElPb8Ex0",
    authDomain: "site-maria-julia.firebaseapp.com",
    databaseURL: "https://site-maria-julia-default-rtdb.firebaseio.com",
    projectId: "site-maria-julia",
    storageBucket: "site-maria-julia.appspot.com",
    messagingSenderId: "641579312371",
    appId: "1:641579312371:web:3e7abda6a092df4db58386",
    measurementId: "G-5WEYPJSCS3"
  };
  
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  export const pacientesRef = ref(database, 'pacientes');

  
