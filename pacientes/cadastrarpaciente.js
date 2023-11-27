import { pacientesRef } from "./database.js";
import { getDatabase, ref, push, onValue } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js';

var button = document.getElementById('buttoncadastro')
button.addEventListener('click', function () {
  cadastrarPaciente();
});

function cadastrarPaciente() {
  const nome = document.getElementById('primeironome').value;
  const naturalidade = document.getElementById('naturalidade').value;
  const nascimento = document.getElementById('nascimento').value;
  const cpf = document.getElementById('cpf').value;
  const celular = document.getElementById('celular').value;
  const observacao = document.getElementById('observacao').value;
  const sessao = document.getElementById('sessao').value;
  const valor = document.getElementById('valor').value;
  const responsavel = document.getElementById('responsavel').value;
  const telefoneresponsavel = document.getElementById('telefoneresponsavel').value;

  const gender = document.querySelector('input[name="gender"]:checked').value;

  push(pacientesRef, {
    nome: nome,
    naturalidade: naturalidade,
    nascimento: nascimento,
    cpf: cpf,
    celular: celular,
    observacao: observacao,
    sessao: sessao,
    valor: valor,
    responsavel: responsavel,
    telefoneresponsavel: telefoneresponsavel,
  });

  alert("Paciente cadastrado com sucesso!");
  limparFormulario();
  carregarPacientes();
}

function limparFormulario() {
  document.getElementById('primeironome').value = '';
  document.getElementById('naturalidade').value = '';
  document.getElementById('nascimento').value = '';
  document.getElementById('cpf').value = '';
  document.getElementById('celular').value = '';
  document.getElementById('observacao').value = '';
  document.getElementById('sessao').value = '';
  document.getElementById('valor').value = '';
  document.getElementById('responsavel').value = '';
  document.getElementById('telefoneresponsavel').value = '';
  document.querySelector('input[name="gender"]:checked').checked = false;
}

function carregarPacientes() {
  var tabelaPacientes = document.getElementById('tabelaPacientes');
  tabelaPacientes.innerHTML = ''; // Limpar a tabela antes de preencher

  onValue(pacientesRef, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      var paciente = childSnapshot.val();

      // Criar uma nova linha na tabela
      var row = tabelaPacientes.insertRow();

      // Adicionar células com as informações do paciente
      row.insertCell(0).textContent = paciente.nome;
      row.insertCell(1).textContent = paciente.nascimento;
      row.insertCell(2).textContent = paciente.cpf;
      row.insertCell(3).textContent = paciente.responsavel;
      row.insertCell(4).textContent = paciente.telefoneresponsavel;

      // Adicionar uma célula para as ações (editar, excluir, etc.)
      var cellAcoes = row.insertCell(5);
      cellAcoes.innerHTML = '<button onclick="editarPaciente(\'' + childSnapshot.key + '\')">Editar</button>';
      cellAcoes.innerHTML += '<button onclick="excluirPaciente(\'' + childSnapshot.key + '\')">Excluir</button>';
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  carregarPacientes();
});