"use sctrict"
const btn = document.getElementById("boton2");

btn.addEventListener("click",(event)=>{//do parametro: Funcion tipo flecha anonima
    event.preventDefault();
    const form = document.getElementById("form");
    console.log(form);
    console.log(form[0].value);
    console.log(form[1].value);
});
