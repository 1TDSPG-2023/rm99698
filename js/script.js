const botao = document.getElementById("meu-btn");

botao.addEventListener("click", function(){

    let r = 0;
    let g = 0;
    let b = 0;

    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);

    this.setAttribute("style", `background-color:rgb(${r},${g},${b});`)

    console.log(this.textContent);
} );

const h2Element = document.querySelector("h2");
h2Element.addEventListener("click", ()=>{
    h2Element.setAttribute("style","font-size:15px")
} );