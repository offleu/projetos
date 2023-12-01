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