



const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;


// Configuração do CORS manual

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});




// Conecte-se ao MongoDB (substitua 'suaConexaoMongoDB' pela sua URL de conexão real)
mongoose.connect('mongodb+srv://root:root@cluster0.vsf5blb.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

// Defina um modelo Mongoose para o paciente
const Paciente = mongoose.model('Paciente', {
  primeironome: String,
  naturalidade: String,
  nascimento: Date,
  cpf: String,
  gender: String,
  celular: String,
  observacao: String,
  sessao: String,
  valor: Number,
  responsavel: String,
  telefoneresponsavel: String
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rota para lidar com o envio do formulário
app.post('/cadastrarPaciente', async (req, res) => {

  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    // Responda com sucesso para solicitações OPTIONS
    res.status(200).end();
    return;
  }

  try {
    const novoPaciente = new Paciente(req.body);
    await novoPaciente.save();
    res.status(201).json({ mensagem: 'Paciente cadastrado com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao cadastrar paciente' });
  }
});

// Inicie o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get('/listarPacientes', async (req, res) => {
  try {
    const pacientes = await Paciente.find();
    res.status(200).json(pacientes);
  } catch (error) {
    console.error('Erro ao obter pacientes:', error);
    res.status(500).json({ mensagem: 'Erro ao obter pacientes' });
  }
});