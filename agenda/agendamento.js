document.addEventListener("DOMContentLoaded", async function () {
    const listaPacientes = await obterListaPacientes();
    preencherListaPacientes(listaPacientes);


    const form = document.getElementById('seuFormularioId');
    form.addEventListener('submit', adicionarEvento);
});


async function carregarAgendamentos() {
    try {
        const resposta = await fetch('http://localhost:3000/listarAgendamentos');
        const listaAgendamentos = await resposta.json();

        // Atualize a tabela com os novos agendamentos
        listaAgendamentos.forEach(agendamento => {
            const { data, hora, paciente } = agendamento;
            const idCelula = `${data}-${hora}`;
            const celula = document.getElementById(idCelula);

            if (celula) {
                celula.textContent = paciente.nome; // Atualize conforme a estrutura real do objeto de paciente
            }
        });
    } catch (error) {
        console.error('Erro ao carregar agendamentos:', error);
    }
}

async function adicionarEvento(event) {
    event.preventDefault();

    const pacienteSelecionado = document.getElementById('paciente').value;
    const dataSelecionada = document.getElementById('calendario').value;
    const hora = document.getElementById('hora').value;

    try {
        const resposta = await fetch('http://localhost:3000/adicionarAgendamento', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                idPaciente: pacienteSelecionado,
                data: dataSelecionada,
                hora,
            }),
        });

        if (resposta.ok) {
            alert('Agendamento concluído com sucesso!');
            // Atualize a tabela de agendamentos após o agendamento bem-sucedido
            await carregarAgendamentos();
        } else {
            console.error('Erro ao agendar evento:', resposta.statusText);
            alert('Erro ao agendar evento. Consulte o console para mais detalhes.');
        }
    } catch (error) {
        console.error('Erro ao agendar evento:', error);
        alert('Erro ao agendar evento. Consulte o console para mais detalhes.');
    }
}

async function obterListaPacientes() {
    try {
        const resposta = await fetch('http://localhost:3000/listaPacientes');
        const listaPacientes = await resposta.json();
        return listaPacientes;
    } catch (error) {
        console.error('Erro ao obter lista de pacientes:', error);
        return [];
    }
}

function preencherListaPacientes(listaPacientes) {
    const selectPaciente = document.getElementById('paciente');
    listaPacientes.forEach(paciente => {
        const option = document.createElement('option');
        option.value = paciente._id; // Use o ID do paciente como valor
        option.textContent = paciente.primeironome;
        selectPaciente.appendChild(option);
    });
}


