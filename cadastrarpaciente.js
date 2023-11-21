
  import { pacientesRef } from "./database.js";
  import { getDatabase, ref, push } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js';
  
  var button = document.getElementById('buttoncadastro')
  button.addEventListener('click', function (){
    cadastrarPaciente();
  });
  
  function cadastrarPaciente () {
    console.log ("chamou");
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
    // Seu código para carregar pacientes ao carregar a página
  });
  