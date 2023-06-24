function habilitarEdicao() {
    var campo =
    document.getElementById("tituloEstabelecimento");
    campo.contentEditable = true;
    campo.focus;
}


document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    var titulo =
    document.getElementById("titulo").value;
    var descricaoPrevia =
    document.getElementById("descricaoPrevia").value;

    atualizarCard(titulo, descricaoPrevia);
});


function atualizarCard(titulo, descricaoPrevia) {
    var cardTitulo =
    document.getElementById("titulo-card");
    var cardDecricao =
    document.getElementById("descricaoPreviaCard");

    cardTitulo.textContent = titulo;
    cardDecricao.textContent = descricaoPrevia;
}



