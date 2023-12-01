document.addEventListener('DOMContentLoaded', () => {
    carregarPacientes();
});

async function carregarPacientes() {
    try {
        const resposta = await fetch('http://localhost:3000/listarPacientes');
        const pacientes = await resposta.json();

        const tabelaPacientes = document.getElementById('tabelaPacientes');
        tabelaPacientes.innerHTML = '';

        pacientes.forEach((paciente) => {
            const newRow = tabelaPacientes.insertRow();
            newRow.innerHTML = `<td>${paciente.primeironome}</td>
                                <td>${formatarData(paciente.nascimento)}</td>
                                <td>${paciente.cpf}</td>
                                <td>${paciente.responsavel}</td>
                                <td>${paciente.telefoneresponsavel}</td>
                                <td>
                                    <button class="btn-editar" data-id="${paciente._id}">Editar</button>
                                    <button class="btn-excluir" data-id="${paciente._id}">Excluir</button>
                                </td>`;
        });

        // Adiciona os ouvintes de eventos após carregar os pacientes
        adicionarOuvintesEventos();
    } catch (error) {
        console.error('Erro ao carregar pacientes:', error);
    }
}

function adicionarOuvintesEventos() {
    // Adiciona um ouvinte de evento para cada botão de excluir
    const botoesExcluir = document.querySelectorAll('.btn-excluir');
    botoesExcluir.forEach((botao) => {
        botao.addEventListener('click', () => {
            const idPaciente = botao.getAttribute('data-id');
            excluirPaciente(idPaciente);
        });
    });

    // Adiciona um ouvinte de evento para cada botão de editar (se necessário)
    const botoesEditar = document.querySelectorAll('.btn-editar');
    botoesEditar.forEach((botao) => {
        botao.addEventListener('click', () => {
            const idPaciente = botao.getAttribute('data-id');
            editarPaciente(idPaciente);
        });
    });
}

async function excluirPaciente(id) {
    try {
        const resposta = await fetch(`http://localhost:3000/excluirPaciente/${id}`, {
            method: 'DELETE',
        });

        if (resposta.ok) {
            // Atualizar a tabela após a exclusão
            carregarPacientes();
        } else {
            console.error('Erro ao excluir paciente:', resposta.statusText);
        }
    } catch (error) {
        console.error('Erro ao excluir paciente:', error);
    }
}

function formatarData(dataString) {
    const data = new Date(dataString);
    return data.toLocaleDateString();
}

function editarPaciente(id) {
    console.log(`Editar paciente com ID: ${id}`);
}