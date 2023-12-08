document.addEventListener("DOMContentLoaded", async function () {
    const listaPacientes = await obterListaPacientes();
    preencherListaPacientes(listaPacientes);
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

const mongoose = require('mongoose');

const agendamentoSchema = new mongoose.Schema({
    idPaciente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Paciente',
        required: true
    },
    dia: {
        type: String,
        required: true
    },
    hora: {
        type: String,
        required: true
    }
});

const Agendamento = mongoose.model('Agendamento', agendamentoSchema);

module.exports = Agendamento;