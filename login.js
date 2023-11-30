document.addEventListener('DOMContentLoaded', function () {
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');

    function openModal() {
        loginModal.style.display = 'block';
    }

    function closeModal() {
        loginModal.style.display = 'none';
    }

    // Fechar o modal se o usuário clicar fora dele
    window.onclick = function (event) {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
    };

    // Adicionando evento de clique ao botão de login
    loginBtn.addEventListener('click', openModal);
});

  
  // Função para realizar o login
  function login() {
    // Lógica de autenticação aqui
    // Exemplo básico: exibe uma mensagem com o nome do usuário
    const username = document.getElementById('username').value;
    document.getElementById('userDisplay').innerText = username;
    document.getElementById('loggedInMessage').style.display = 'block';
    document.getElementById('logoutBtn').style.display = 'block';
    closeModal(); // Fecha o modal após o login
  }
  
  // Função para realizar o logout
  function logout() {
    // Lógica de logout aqui
    // Exemplo básico: limpa as informações do usuário
    document.getElementById('userDisplay').innerText = '';
    document.getElementById('loggedInMessage').style.display = 'none';
    document.getElementById('logoutBtn').style.display = 'none';
    openModal(); // Abre o modal após o logout
  }
  
  // Adiciona um evento ao botão de login no cabeçalho
  document.querySelector('header p').addEventListener('click', openModal);