let menuAb = false;
const botao =document.querySelector('.btn-menu')
const navAbrir = document.querySelector('#navbar-itens')
const navBar = document.querySelector('#navbar')


botao.addEventListener("click",()=>{
    if(!menuAb){
        navAbrir.style.top= '0px';
        navBar.style.height= "250px";
        menuAb = true;
    }else{
        navAbrir.style.top = '-220px';
        navBar.style.height = "80px";
        menuAb = false;
    }
})
