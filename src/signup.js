//<!-- Sistema LocalStorage desenvolvido por Pedro Henrique N Lemos-->

function signup(e){
    event.preventDefault();
    //console.log('Funcionando');

    var email = document.getElementById('email').value;
    var nome = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;
    var confirmarSenha = document.getElementById('confirmarSenha').value;

    var usuario = {
        email: email,
        nome: nome,
        senha: senha,
    };

    var json = JSON.stringify(usuario);
    localStorage.setItem(email, json);
    console.log('usuario adicionado');
}
