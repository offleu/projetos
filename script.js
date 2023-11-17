

const handleSubmit = (event) => {
    event.prevenDefault();

    const name = document.querySelector('input [name=name]').value;
    const nascimento = document.querySelector('input [name=nascimento]').value;
    const cpf = document.querySelector('input [name=cpf]').value;
    const responsavel = document.querySelector('input [name=responsavel]').value;
    const telefoneresponsavel = document.querySelector('input [name=telefoneresponsavel]').value;
    const genero = document.querySelector('input [name=genero]').value;

    fetch ('https://api.sheetmonkey.io/form/e8tgXuzxC9DyCMTfvREfzu', {

    method: 'post',
    headers: {
        'Acecept': 'application/json',
        'Contet-Type': 'application/js',
    },
    
    body: JSON.stringify({name, nascimento,cpf,responsavel, telefoneresponsavel, genero })


    }).then(() => alert('Paciente Cadastrado'));
    


}

document.querySelector('form').addEventListener('submit', handleSubmit);