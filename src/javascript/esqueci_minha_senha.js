function validateForm() {
    var senha = document.getElementById("senha").value;
    var confirmaSenha = document.getElementById("confirma-senha").value;

    // Verifica se as senhas digitadas correspondem
    if (senha !== confirmaSenha) {
        alert("As senhas digitadas não correspondem. Por favor, tente novamente.");
        return false;
    }

    // Verifica se a senha tem pelo menos 8 dígitos e um caractere especial
    var regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!regex.test(senha)) {
        alert("A senha deve conter pelo menos 8 caracteres, uma letra minúscula, uma letra maiúscula, um número e um caractere especial (!@#$%^&*)");
        return false;
    }
}