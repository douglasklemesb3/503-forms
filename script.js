let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let confirm = document.querySelector("#confirm");
let senha = document.querySelector("#senha");
let botao = document.querySelector("button");
let sexo = document.querySelector("#sexo");
let div = document.querySelector("div");
let section = document.querySelector("section");
let p = document.querySelector("p");
let a = document.querySelector("a");
let texto = document.querySelector("h2");

if(localStorage.nome){
    div.style.display = "none";
    section.style.display = "initial"
    texto.innerHTML = `Seja bem vindo ${localStorage.nome}`;
    p.innerHTML = `seu email é ${localStorage.email} ,sua senha é ${localStorage.senha} seu sexo é ${localStorage.sexo}`;
    a.innerHTML = `você não é ${localStorage.nome} ?`

}



function cadastro() {
    if (email.value === confirm.value) {
        localStorage.setItem("nome", nome.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("senha", senha.value);
        localStorage.setItem("sexo", sexo.value);
        div.style.display = "none";
        section.style.display = "initial"
        texto.innerHTML = `Seja bem vindo ${localStorage.nome}`;
        p.innerHTML = `seu email é ${localStorage.email} ,sua senha é ${localStorage.senha} seu sexo é ${localStorage.sexo}`;
        a.innerHTML = `você não é ${localStorage.nome} ?`
    }
    else {
        alert("erro,seu cadastro nao foi realizado")

    }
}
function resetar() {
    localStorage.clear();
}


botao.onclick = cadastro;
a.onclick = resetar;