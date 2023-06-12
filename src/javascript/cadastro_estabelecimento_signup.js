//<!-- Sistema LocalStorage desenvolvido por Pedro Henrique N Lemos-->

function signup(e){
    event.preventDefault();
    //console.log('Funcionando');

    var email = document.getElementById('email').value;
    var nome = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;
    var confirmarSenha = document.getElementById('confirmarSenha').value;
    var result = document.getElementById('result');

    var usuario = {
        email: email,
        nome: nome,
        senha: senha,
    };

    var json = JSON.stringify(usuario);
    localStorage.setItem(email, json);
    console.log('usuario adicionado');

    if(usuario == null){
        result.innerHTML = "Dados incorretos";
    }else{
        alert('Cadastro realizado com sucesso!');
        window.location.href = 'signin.html';
    }
}
