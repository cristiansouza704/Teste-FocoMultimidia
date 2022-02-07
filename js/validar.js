let nome = document.querySelector('#idNome')
let inputNome = document.querySelector('#idNome')
let labelNome = document.querySelector('#lNome')
let valNome = false;

let cpf = document.querySelector("#idCpf");
let inputCpf = document.querySelector("#idCpf");
let labelCpf = document.querySelector('#lCpf')
let valCpf = false;

let telefone = document.querySelector("#idTel");
let labelTel = document.querySelector('#lTel')
let valTelefone = false;

let email = document.querySelector("#idEmail");
let labelEmail = document.querySelector('#lEmail')
let valEmail = false;

let cep = document.querySelector("#idCep");
let labelCep = document.querySelector('#lCep')
let valCep = false;

let logradouro = document.querySelector("#idLogradouro");
let labelLogradouro = document.querySelector('#lLogradouro')
let valLogradouro = false;

let bairro = document.querySelector("#idBairro");
let labelBairro = document.querySelector('#lBairro')
let valBairro = false;

let cidade = document.querySelector("#idCidade");
let labelCidade = document.querySelector("#lCidade");
let valCidade = false;

let estado = document.querySelector("#idEstado");
let labelEstado = document.querySelector("#lEstado");
let valEstado = false;

console.log(telefone);

    nome.addEventListener('keyup', function () {
        if (nome.value.length <= 5) {
            inputNome.setAttribute('style', 'border:1px solid red');
            labelNome.setAttribute('style', 'color: red', );
            labelNome.innerHTML = 'Insira No Minimo 5 Caracteres'
        
        } else {
            inputNome.setAttribute('style', 'border:1px solid rgb(0, 255, 0);');
            labelNome.setAttribute('style', 'color: rgb(0, 255, 0);', );
            labelNome.innerHTML = 'Nome Ok!'
        }
    })

    cpf.addEventListener('keyup', function () {
        if (cpf.value.length != 11) {
            inputCpf.setAttribute('style', 'border:1px solid red');
            labelCpf.setAttribute('style', 'color: red', );
            labelCpf.innerHTML = 'Insira o CPF corretamente'
        } else {
            inputCpf.setAttribute('style', 'border:1px solid rgb(0, 255, 0);');
            labelCpf.setAttribute('style', 'color: rgb(0, 255, 0);', );
            labelCpf.innerHTML = 'CPF ok!'
        }
    })
    telefone.addEventListener('keyup', function () {
        if (telefone.value.length != 11) {
            telefone.setAttribute('style', 'border:1px solid red');
            labelTel.setAttribute('style', 'color: red', );
            labelTel.innerHTML = 'Insira o numero de Telefone corretamente'
        } else {
            telefone.setAttribute('style', 'border:1px solid rgb(0, 255, 0);');
            labelTel.setAttribute('style', 'color: rgb(0, 255, 0);', );
            labelTel.innerHTML = 'Telefone Ok!'
        }
    })
    email.addEventListener('keyup', function () {
        if ( document.forms[0].email.value=="" || document.forms[0].email.value.indexOf('@')==-1 || document.forms[0].email.value.indexOf('.')==-1 ) 
          {
            email.setAttribute('style', 'border:1px solid red');
            labelEmail.setAttribute('style', 'color: red', );
            labelEmail.innerHTML = 'Insira o email corretamente'
        } else {
            email.setAttribute('style', 'border:1px solid rgb(0, 255, 0);');
            labelEmail.setAttribute('style', 'color: rgb(0, 255, 0);', );
            labelEmail.innerHTML = 'Email Ok!'
        }
        function checarEmail(){
            if( document.forms[0].email.value=="" 
               || document.forms[0].email.value.indexOf('@')==-1 
                 || document.forms[0].email.value.indexOf('.')==-1 )
                {
                  alert( "Por favor, informe um E-MAIL válido!" );
                  return false;
                }
            }
    })
    cep.addEventListener('keyup', function () {
        if (cep.value.length < 8 || cep.value.length > 12) {
            cep.setAttribute('style', 'border:1px solid red');
            labelCep.setAttribute('style', 'color: red', );
            labelCep.innerHTML = 'Insira o cep corretamente'
        } else {
            cep.setAttribute('style', 'border:1px solid rgb(0, 255, 0);');
            labelCep.setAttribute('style', 'color: rgb(0, 255, 0);', );
            labelCep.innerHTML = 'CEP Ok!'
        }
    })
    logradouro.addEventListener('keyup', function () {
        if (logradouro.value.length <= 4) {
            logradouro.setAttribute('style', 'border:1px solid red');
            labelLogradouro.setAttribute('style', 'color: red', );
            labelLogradouro.innerHTML = 'Insira no minimo 4 caracteres'
        } else {
            logradouro.setAttribute('style', 'border:1px solid rgb(0, 255, 0);');
            labelLogradouro.setAttribute('style', 'color: rgb(0, 255, 0);', );
            labelLogradouro.innerHTML = 'Logradouro Ok!'
        }
    })
    bairro.addEventListener('keyup', function () {
        if (bairro.value.length <= 4) {
            bairro.setAttribute('style', 'border:1px solid red');
            labelBairro.setAttribute('style', 'color: red', );
            labelBairro.innerHTML = 'Insira no minimo 4 caracteres'
        } else {
            bairro.setAttribute('style', 'border:1px solid rgb(0, 255, 0);');
            labelBairro.setAttribute('style', 'color: rgb(0, 255, 0);', );
            labelBairro.innerHTML = 'Bairro Ok!'
        }
    })
    cidade.addEventListener('keyup', function () {
        if (cidade.value.length <= 4) {
            cidade.setAttribute('style', 'border:1px solid red');
            labelCidade.setAttribute('style', 'color: red', );
            labelCidade.innerHTML = 'Insira no minimo 4 caracteres'
        } else {
            cidade.setAttribute('style', 'border:1px solid rgb(0, 255, 0);');
            labelCidade.setAttribute('style', 'color: rgb(0, 255, 0);', );
            labelCidade.innerHTML = 'Bairro Ok!'
        }
    })
    estado.addEventListener('keyup', function () {
        if (estado.value.length <= 4) {
            estado.setAttribute('style', 'border:1px solid red');
            labelEstado.setAttribute('style', 'color: red', );
            labelEstado.innerHTML = 'Insira no minimo 4 caracteres'
        } else {
            estado.setAttribute('style', 'border:1px solid rgb(0, 255, 0);');
            labelEstado.setAttribute('style', 'color: rgb(0, 255, 0);', );
            labelEstado.innerHTML = 'Bairro Ok!'
        }
    })