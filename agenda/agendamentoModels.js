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