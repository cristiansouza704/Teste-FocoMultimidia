var form = document.getElementsByClassName('form-item');

var nome = document.getElementsById('Nome');
var cpf =document.getElementById('idCpf');
var tel = document.getElementById('idTel');
var email = document.getElementById('idEmail');
var cep = document.getElementById('idCep');
var logradouro = document.getElementById('idLogradouro');
var bairro = document.getElementById('idBairro');
var cidade = document.getElementById('idCidade');
var estado = document.getElementById('idEstado');

function verificar(){

    var nomeValue = nome.Value;

    if(nome.value ===""){

    }
}


/*

form.addEventListener('submit', (e) => {

    e.preventDefault()

    alerta()

    checkInputs()
});

function alerta(){

    alert('tudo ok');

    
}


function checkInputs(){
    const nomeValue = nome.value.trim()
    const cpfValue = cpf.value.trim()
    const telValue = tel.value.trim()
    const emailValue = email.value.trim()
    const cepValue = cep.value.trim()
    const logradouroValue = logradouro.value.trim()
    const bairroValue = bairro.value.trim()
    const cidadeValue = cidade.value.trim()
    const estadoValue = estado.value.trim()

    if (nomeValue === ''){

        alert('tudo ok')
        errorValidation(nome, 'Preencha esse campo!')

    }else{
        
    }
}
function errorValidation(Input, message){
    
    const formItens = Input.parentElement;
    const small = formItens.getElementsByClassName('small');

    small.innerText = message;

    formItens.className = 'itens error';
} */