document.addEventListener('DOMContentLoaded', () => {
    // Extrair o ID do parâmetro da URL
    const urlParams = new URLSearchParams(window.location.search);
    const idPaciente = urlParams.get('id');

    // Verificar se o ID do paciente está presente
    if (idPaciente) {
        // Carregar detalhes do paciente usando o ID
        carregarDetalhesPaciente(idPaciente);
    } else {
        console.error('ID do paciente não encontrado na URL.');
    }
});

async function carregarDetalhesPaciente(id) {
    try {
        const resposta = await fetch(`http://localhost:3000/obterPaciente/${id}`);
        const paciente = await resposta.json();

        // Preencher os campos na página com os dados do paciente
        document.getElementById('nome-dado').textContent = paciente.primeironome;
        document.getElementById('telefone-dado').textContent = paciente.telefone;
        document.getElementById('email-dado').textContent = paciente.email;
        document.getElementById('data-nascimento-dado').textContent = formatarData(paciente.nascimento);
        document.getElementById('responsavel-dado').textContent = paciente.responsavel;
        document.getElementById('tipo-sessao-dado').textContent = paciente.tipoSessao;
        document.getElementById('valor-sessao-dado').textContent = paciente.valorSessao;
    } catch (error) {
        console.error('Erro ao obter detalhes do paciente:', error);
    }
}

function formatarData(dataString) {
    const data = new Date(dataString);
    return data.toLocaleDateString();
}