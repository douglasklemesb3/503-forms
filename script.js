let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let confirm = document.querySelector("#confirm");
let senha = document.querySelector("#senha");
let botao = document.querySelector("button");
let sexo = document.querySelector("#sexo");

function cadastro() {
    console.log("a")
    if(email.value === confirm.value){
        localStorage.setItem("nome" ,nome.value);
        localStorage.setItem("email" ,email.value);
        localStorage.setItem("senha" ,senha.value);
        localStorage.setItem("sexo" ,sexo.value);
    }
    else{
   
    }
}

botao.onclick = cadastro;