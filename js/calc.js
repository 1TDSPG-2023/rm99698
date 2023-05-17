
function insereNumeroNoVisor(botao,visor) {
    if(botao.value === "+" || botao.value === "-" || botao.value === "*" || botao.value === "/"){

        if(visor.value[visor.value.length - 1] == "+" || visor.value[visor.value.length - 1] == "-" || visor.value[visor.value.length - 1] == "*" || visor.value[visor.value.length - 1] == "/"){
            visor.value.slice(visor.value.length-1);
        }else{
            visor.value += botao.value;    
        }

    }else{
        visor.value += botao.value;
    }
}

const resultadoDasOperacoes = (visor) =>{
    //Utilizar a função eval para processar uma string como se fosse uma expressão matemática.
    visor.value = eval(visor.value);
}
