// Importe a biblioteca Mongoose
const mongoose = require('mongoose');

// Defina o esquema do agendamento
const agendamentoSchema = new mongoose.Schema({
    idPaciente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Paciente', // Referência ao modelo de Paciente
        required: true,
    },
    dia: {
        type: String,
        required: true,
    },
    hora: {
        type: String,
        required: true,
    },
});

// Crie o modelo de Agendamento com base no esquema
const Agendamento = mongoose.model('Agendamento', agendamentoSchema);

// Exporte o modelo para ser usado em outros arquivos
module.exports = Agendamento;
