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
const pacientesRef = ref(database, 'pacientes');

function cadastrarPaciente() {
  const nome = document.getElementById('primeironome').value;
  const nascimento = document.getElementById('nascimento').value;
  const cpf = document.getElementById('cpf').value;
  const responsavel = document.getElementById('responsavel').value;
  const telefoneresponsavel = document.getElementById('telefoneresponsavel').value;
  const genero = document.querySelector('input[name="genero"]:checked').value;

  push(pacientesRef, {
    nome: nome,
    nascimento: nascimento,
    cpf: cpf,
    responsavel: responsavel,
    telefoneresponsavel: telefoneresponsavel,
    genero: genero
  });

  alert("Paciente cadastrado com sucesso!");
  limparFormulario();
  carregarPacientes();
}

function limparFormulario() {
  // Seu código para limpar o formulário
}

function carregarPacientes() {
  // Seu código para carregar pacientes
}

document.addEventListener("DOMContentLoaded", function() {
  carregarPacientes();
});