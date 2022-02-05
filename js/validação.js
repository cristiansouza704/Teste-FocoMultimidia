var form = document.getElementById('idFormulario');

var nome = document.getElementById('idNome');
var cpf =document.getElementById('idCpf');
var tel = document.getElementById('idTel');
var email = document.getElementById('idEmail');
var cep = document.getElementById('idCep');
var logradouro = document.getElementById('idLogradouro');
var bairro = document.getElementById('idBairro');
var cidade = document.getElementById('idCidade');
var estado = document.getElementById('idEstado');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
});

function checkInputs(){
    const nomeValue = nome.Value
    const cpfValue = cpf.Value
    const telValue = tel.Value
    const emailValue = email.Value
    const cepValue = cep.Value
    const logradouroValue = logradouro.Value
    const bairroValue = bairro.Value
    const cidadeValue = cidade.Value
    const estadoValue = estado.Value
}