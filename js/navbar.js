var menunav = document.getElementById('navbar-itens');
var botao = document.getElementById('btn-menu');
var botaoFechar = document.getElementById('btn-menu').children[0];

botao.addEventListener('click', () =>{
    menunav.classList.toggle('active');
} 
)