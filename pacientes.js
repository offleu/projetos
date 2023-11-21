

var firebaseConfig = {
  apiKey: "AIzaSyDABxRv7TeJCvrJqJxpdK-WAvqElPb8Ex0",
  authDomain: "site-maria-julia.firebaseapp.com",
  databaseURL: "https://site-maria-julia-default-rtdb.firebaseio.com",
  projectId: "site-maria-julia",
  storageBucket: "site-maria-julia.appspot.com",
  messagingSenderId: "641579312371",
  appId: "1:641579312371:web:3e7abda6a092df4db58386",
  measurementId: "G-5WEYPJSCS3"
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var pacientesRef = database.ref('pacientes');



function cadastrarPaciente() {
  var nome = document.getElementById('primeironome').value;
  var nascimento = document.getElementById('nascimento').value;
  var cpf = document.getElementById('cpf').value;
  var responsavel = document.getElementById('responsavel').value;
  var telefoneresponsavel = document.getElementById('telefoneresponsavel').value;
  var genero = document.querySelector('input[name="genero"]:checked').value;

  pacientesRef.push({
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