document.addEventListener("DOMContentLoaded", async function () {
    const listaPacientes = await obterListaPacientes();
    preencherListaPacientes(listaPacientes);

    // Adiciona um event listener ao botão Agendar
    const btnAgendar = document.getElementById('btnAgendar');
    btnAgendar.addEventListener('click', agendarEvento);
});

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

async function agendarEvento() {
    try {
        // Verifica se um paciente foi selecionado
        const pacienteSelecionado = document.getElementById('paciente').value;
        if (!pacienteSelecionado) {
            alert('Por favor, selecione um paciente.');
            return;
        }

        const dia = document.getElementById('dia').value;
        const hora = document.getElementById('hora').value;

        const resposta = await fetch('http://localhost:3000/adicionarAgendamento', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                idPaciente: pacienteSelecionado,
                dia,
                hora,
            }),
        });

        if (resposta.ok) {
            alert('Agendamento concluído com sucesso!');
        } else {
            console.error('Erro ao agendar evento:', resposta.statusText);
            alert('Erro ao agendar evento. Consulte o console para mais detalhes.');
        }
    } catch (error) {
        console.error('Erro ao agendar evento:', error);
        alert('Erro ao agendar evento. Consulte o console para mais detalhes.');
    }
}
