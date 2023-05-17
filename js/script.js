/* <button id="meu-btn">CLICK</button> */

// const btn = document.getElementById("meu-btn");

// //Atrelando um evento ao ELEMENTO
// btn.addEventListener("click", function(){

//     //Função matemática Math
//     //Math.randon = retorna números aleatórios entre 0 e 1 . Ex: 0.121821927
//     //Math.floor = Função de arrendodamento para baixo
//     //Math.ceil = Função de arrendodamento para cima
//     //Math.round = Função de arrendodamento aleatório

//     let r = 0;
//     let g = 0;
//     let b = 0;
//     //Numeros aleatório gerados...
//     r = Math.round(Math.random() * 255);
//     g = Math.round(Math.random() * 255);
//     b = Math.round(Math.random() * 255);

//     // this.setAttribute("style", "background-color:rgb("+r+","+g+","+b+");");
//     this.setAttribute("style", `background-color:rgb(${r},${g},${b});`);

// } );

// //DESAFIO
// //Recupere o elemento tit-sec e atrele a ele um evento de click.
// //Quando clicado o elemento deve diminuir em 10px.

// // const h2Element = document.getElementById("meu-tit");
// // h2Element.addEventListener("click", ()=>{
// //     h2Element.setAttribute("style","font-size:15px");
// // } );

// const h2Element = document.querySelector("h2");
// h2Element.addEventListener("click", ()=>{
//     h2Element.setAttribute("style","font-size:15px");
// } );

//ARRAYS E SEU M[ETODOS]
// let frutas = ["banana","maçã","pêra","uva","melancia","ameixa","morango","goiaba"];
// console.log(frutas);
// console.log("FRUTA : " + frutas[4])
// //Descobrindo o tamanho do array através da propriedade length
// console.log(`Tamanho do Array : ${frutas.length}`);

// //Adicionando um iten ao final do array com o método push(itenNome);
// frutas.push("fruta-conde");
// console.table(frutas);
// //Adicionando um iten no inicio do array com o método unshift(itenNome);
// frutas.unshift("jabuticaba");
// console.log(frutas);

// //Remover um iten do final do array com o método pop();
// frutas.pop();
// console.log(frutas);
// //Remover um iten do inicio do array com o método shift();
// frutas.shift();
// console.log(frutas);

// //Localizando um item com o método indexOf(itenNome);
// //Obs: O indexOf(itenNome), vai retornar o indice onde se encontra o iten buscado.
// // let indice = frutas.indexOf("morango");
// // console.log(indice);
// // console.log(frutas[indice]);

// //Removendo um indice uma determinada quantidade de vezes utilizando o método splice.
// // splice(indice do iten, quantidade de vezes a ser removido);
// //Obs: Para obter o indice utilize o método indexOf(itenNome);
// let indice = frutas.indexOf("ameixa");
// console.log(indice);
// console.log(`FRUTA QUE ESTAVA NO INDICE ANTES DA REMOÇÃO : ${frutas[indice]}`);
// //Aplicando o splice e usando o indice obtido com indexOf.
// frutas.splice(indice,1);
// console.log(`FRUTA QUE FICOU NO INDICE DEPOIS DA REMOÇÃO : ${frutas[indice]}`);

// //Percorrer o ARRAY utilizando o forEach
// frutas.forEach( (fruta)=>{
//     console.log(`Olha ela : ${fruta}`);
// } );

let nr1 = [1,2,3,4,5];
let nr2 = [6,7,8,9,10];
console.log(`ARRAY 1: ${nr1}`);
console.log(`ARRAY 2: ${nr2}`);
//Concatenando arrays
let nr3 = [nr1,nr2];
console.log(`NOVO ARRAY: ${nr3}`);
//Percorrendo o novo array com forEach
nr3.forEach((nr)=>{
    console.log(`ITEM DO NOVO ARRAY: ${nr}`);
});

//Concatenando o array com o operador SPREAD( ... )
nr3 = [...nr1,...nr2];
console.log(`NOVO ARRAY COM SPREAD: ${nr3}`);
//Percorrendo o novo array com forEach
nr3.forEach((nr)=>{
    console.log(`ITEM DO NOVO ARRAY COM SPREAD: ${nr}`);
});