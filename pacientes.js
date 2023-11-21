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

// Referência para o nó "pacientes" no Realtime Database
var database = firebase.database();
var pacientesRef = database.ref('pacientes');

function cadastrarPaciente() {
  // Obter valores do formulário
  var nome = document.getElementById('primeironome').value;
  var nascimento = document.getElementById('nascimento').value;
  var cpf = document.getElementById('cpf').value;
  var responsavel = document.getElementById('responsavel').value;
  var telefoneresponsavel = document.getElementById('telefoneresponsavel').value;
  var genero = document.querySelector('input[name="genero"]:checked').value;

  // Adicionar paciente ao Realtime Database
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
  document.getElementById('primeironome').value = '';
  document.getElementById('nascimento').value = '';
  document.getElementById('cpf').value = '';
  document.getElementById('responsavel').value = '';
  document.getElementById('telefoneresponsavel').value = '';
  document.getElementById('generoM').checked = false;
  document.getElementById('generoF').checked = false;
}

function carregarPacientes() {
  // Limpar a lista antes de carregar os pacientes
  var listaPacientes = document.getElementById('listaPacientes');
  listaPacientes.innerHTML = '';

  // Carregar pacientes do Realtime Database
  pacientesRef.once('value').then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var paciente = childSnapshot.val();
      var listItem = document.createElement('li');
      listItem.textContent = `${paciente.nome} - ${paciente.cpf}`;
      listaPacientes.appendChild(listItem);
    });
  });
}

// Carregar pacientes ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
  carregarPacientes();
});
  

 
