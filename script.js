let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let confirmaçaoDeEmail = document.querySelector("#confirmaçao de email");
let senha = document.querySelector("#senha");
let botao = document.querySelector("#botao");
let sexo = document.querySelector("#sexo");

function cadastro() {
    if(email.value === confirmaçaoDeEmail){
        localStorage.setItem("sexo" ,sexo.value);
        localStorage.setItem("nome" ,nome.value);
        localStorage.setItem("email" ,email.value);
        localStorage.setItem("senha" ,senha.value);

    }
}

botao.onclick = cadastro;