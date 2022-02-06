let nome = document.getElementById('idNome');
let labelNome = document.querySelector('#lNome')
let valNome = false;

let cpf = document.querySelector("#idCpf");
let labelCpf = document.querySelector('#lCpf')
let valCpf = false;

let telefone = document.querySelector(".idTel");
let valTelefone = false;

let email = document.querySelector(".idEmail");
let valEmail = false;

let cep = document.querySelector(".idCep");
let valCep = false;

let bairro = document.querySelector(".idBairro");
let valBairro = false;

let cidade = document.querySelector(".idCidade");
let valCidade = false;

let estado = document.querySelector(".idEstado");
let valEstado = false;

nome.addEventListener('keyup', () =>{
    if (nome.value.length <= 2 ) {
        alert('Diigite');
    } else {
        
    }
})
cpf.addEventListener('keyup', () =>{
    if (cpf.value.length <= 2 ) {
        labelCpf.setAttribute('style', 'color: red')
    } else {
        
    }
})

btn.addEventListener('click', (e) => {
    e.preventDefault()

    checkinputs() 
})
