


document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const idPaciente = urlParams.get('id');

    if (idPaciente) {
        carregarDadosPaciente(idPaciente);
    } else {
        console.error('ID do paciente não encontrado na URL.');
    }
});

async function carregarDadosPaciente(id) {
    try {
        const resposta = await fetch(`http://localhost:3000/obterPaciente/${id}`);
        const paciente = await resposta.json();

        // Preencher os campos com os dados do paciente
        document.querySelector('.dados-paciente .nome-dado').textContent = paciente.primeironome;
        document.querySelector('.dados-paciente .telefone-dado').textContent = paciente.telefone;
        document.querySelector('.dados-paciente .email-dado').textContent = paciente.email;
        document.querySelector('.dados-paciente .data-nascimento-dado').textContent = formatarData(paciente.nascimento);

        document.querySelector('.dados-paciente .responsavel-dado').textContent = paciente.responsavel;
        document.querySelector('.dados-paciente .tipo-sessao-dado').textContent = paciente.tipoSessao;
        document.querySelector('.dados-paciente .valor-sessao-dado').textContent = paciente.valorSessao;

        // Continuar preenchendo os outros campos conforme necessário

    } catch (error) {
        console.error('Erro ao carregar dados do paciente:', error);
    }
}

function formatarData(dataString) {
    const data = new Date(dataString);
    return data.toLocaleDateString();
}