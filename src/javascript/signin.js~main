//<!-- Tela de login desenvolvido por Pedro Henrique N Lemos-->
//Carrosel de imagens:
const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});

// Cadastro:

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

// Funcionalidade de validação de cadastro:

function loginFunc(e){
  event.preventDefault();
  
  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;
  var result = document.getElementById('result');

  var usuario = localStorage.getItem(email);
  var dados = JSON.parse(usuario);
  console.log(dados);

  if(usuario == null){
    result.innerHTML = "Email incorreto";
    alert('Por favor, preencha todos os campos corretamente.');
  } else if(email == dados.email && senha == dados.senha){
    alert('Login realizado com sucesso!');
    window.location.href = 'sectionDadosCadastraisPerfil.html';
  }else{
    result.innerHTML = 'Senha incorreta';
  }
}