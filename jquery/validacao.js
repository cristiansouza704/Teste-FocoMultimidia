$(document).ready(function(){
    $('#idForm').validate({
        rules:{
            Nome:{
                required:true,
                minlength:5
                
            },
            cpf:{
                required:true,
                minlength:11,
                cpfbr:true,
                
            },
            telefone:{
                required:true,
                minlength:11
            },
            email:{
                required:true,
                email: true
            },
            cep:{
                required:true,
                minlength:8,
                postalcodeBR: true,
                
            },
            logradouro:{
                required:true,
                minlength:5
            },
            bairro:{
                required:true,
                minlength:4
            },
            cidade:{
                required:true,
                minlength:5
            },
            estado:{
                required:true,
                minlength:5
            },
        },
        message:{
            Nome:{
                required: "Este campo é obrigatorio",
                minlength:"Mininmo 5 Caracteres"
                
            },
            cpf:{
                required:"Este campo é obrigatorio",
                minlength:"Mininmo 11 Caracteres"
            }
        },
    
    });
 
});