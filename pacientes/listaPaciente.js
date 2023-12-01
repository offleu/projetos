document.addEventListener('DOMContentLoaded', () => {
    carregarPacientes();
  });
  
  async function carregarPacientes() {
    try {
      const resposta = await fetch('http://localhost:3000/listarPacientes');
      const pacientes = await resposta.json();
  
      // Limpar a tabela antes de adicionar os novos dados
      const tabelaPacientes = document.getElementById('tabelaPacientes');
      tabelaPacientes.innerHTML = '';
  
      // Adicionar cada paciente à tabela
      pacientes.forEach((paciente) => {
        const newRow = tabelaPacientes.insertRow();
        newRow.innerHTML = `<td>${paciente.primeironome}</td>
                            <td>${formatarData(paciente.nascimento)}</td>
                            <td>${paciente.cpf}</td>
                            <td>${paciente.responsavel}</td>
                            <td>${paciente.telefoneresponsavel}</td>
                            <td><button onclick="editarPaciente('${paciente._id}')">Editar</button></td>`;
      });
    } catch (error) {
      console.error('Erro ao carregar pacientes:', error);
    }
  }
  
  function formatarData(dataString) {
    const data = new Date(dataString);
    return data.toLocaleDateString();
  }
  
  function editarPaciente(id) {
    // Implemente a lógica para editar um paciente com base no ID
    console.log(`Editar paciente com ID: ${id}`);
  }