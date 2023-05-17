//Gerando um token com Math.
let tokenGerado = Math.random().toString(16).substring(2);
//DECLARANDO OBJETOS
const usuario1 = {
    nomeUsuario : "denden",
    senhaUsuario: "12345",
    gravaDados : true,
    token : tokenGerado
}

tokenGerado = Math.random().toString(16).substring(2);
//DECLARANDO OBJETOS
const usuario2 = {
    nomeUsuario : "gege",
    senhaUsuario: "12345",
    gravaDados : true,
    token : tokenGerado
}

let listaDeUsuarios = [];
listaDeUsuarios.push(usuario1);
listaDeUsuarios.push(usuario2);

addEventListener("click", (evt)=>{
    const inputUser = document.querySelector("#idUser");
    const inputPass = document.querySelector("#idPass");

    if(evt.target.id == "btnSubmit"){
        
        try {
            
            listaDeUsuarios.forEach((usuario)=>{
                
                if(inputUser.value == usuario.nomeUsuario && inputPass.value == usuario.senhaUsuario){
                    throw "VALIDADO";
                }
            });
            
            throw "NÃO VALIDADO";

        } catch (msg) {
            const msgError = document.querySelector("#msgError");
            if(msg == "VALIDADO"){
                msgError.setAttribute("style","color:#00ff00;");
                msgError.innerHTML = "<span><strong>Login efetuado com Sucesso!</strong></span>";
            }else{
                msgError.setAttribute("style","color:#ff0000;");
                msgError.innerHTML = "<span><strong>Usuário ou senha inválidos!</strong></span>";
            }
        }

//DESAFIO:
//Troque o ícone do olho aberto assim que o usuário clicar para ver a senha pelo ícone de olho cortado.

    }else if(evt.target.className == "fa fa-eye" || evt.target.className == "fa fa-eye-slash"){
        //Mostrando a senha!
        if(inputPass.getAttribute("type") == "password"){
            evt.target.setAttribute("class","fa fa-eye-slash");
            inputPass.setAttribute("type","text");
        }else{
        //Ocultando a senha!
            evt.target.setAttribute("class","fa fa-eye");
            inputPass.setAttribute("type","password");
        }
        
    }
});