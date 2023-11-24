var modal = document.getElementById("modal");

function abrirModal() {
    modal.style.display = "block";
}

function fecharModal() {
    modal.style.display = "none";
}

function uploadFoto() {
    var inputFoto = document.getElementById("input-foto-modal");

    // Verifica se um arquivo foi selecionado
    if (inputFoto.files.length > 0) {
        var file = inputFoto.files[0];

        // Adicione aqui o código para realizar o upload para o Firebase Realtime Database
        // Certifique-se de ter configurado o Firebase em seu projeto

        // Exemplo básico de upload usando o Firebase Storage
        var storageRef = firebase.storage().ref();
        var fotoRef = storageRef.child('fotos/' + file.name);

        fotoRef.put(file).then(function(snapshot) {
            console.log('Upload concluído!');
            // Aqui você pode adicionar lógica adicional, como salvar a URL da imagem no Realtime Database
            // snapshot.ref.getDownloadURL().then(function(downloadURL) {
            //     console.log('URL da imagem:', downloadURL);
            // });
            fecharModal();
        }).catch(function(error) {
            console.error('Erro ao fazer upload:', error);
        });
    }
}