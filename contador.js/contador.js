
// comandos para o botão de muito satisfeito
let mSatisfeito = document.getElementById("mSatisfeito")
let contador1 = document.getElementById("contador1")

let inicioValor1 = 0;
contador1.innerHTML = inicioValor1;
mSatisfeito.addEventListener("click",function(){
    inicioValor1++;

    contador1.innerHTML = inicioValor1;
});

// comandos para o botao satisfeito
let satisfeito = document.getElementById("satisfeito")
let contador2 = document.getElementById("contador2")

let inicioValor2 = 0;
contador2.innerHTML = inicioValor2;
satisfeito.addEventListener("click",function(){
    inicioValor2++;

    contador2.innerHTML = inicioValor2;
});

// comandos para o botao regular
let regular = document.getElementById("regular")
let contador3 = document.getElementById("contador3")

let inicioValor3 = 0;
contador3.innerHTML = inicioValor3;
regular.addEventListener("click",function(){
    inicioValor3++;

    contador3.innerHTML = inicioValor3;
});

// comandos para o botao insatisfeito
let insatisfeito = document.getElementById("insatisfeito")
let contador4 = document.getElementById("contador4")

let inicioValor4 = 0;
contador4.innerHTML = inicioValor4;
insatisfeito.addEventListener("click",function(){
    inicioValor4++;

    contador4.innerHTML = inicioValor4;
});

// comandos para o botao muito insatisfeito
let mInsatisfeito = document.getElementById("mInsatisfeito")
let contador5 = document.getElementById("contador5")

let inicioValor5 = 0;
contador5.innerHTML = inicioValor5;
mInsatisfeito.addEventListener("click",function(){
    inicioValor5++;

    contador5.innerHTML = inicioValor5;
});


//comandos para o botao limpar dados
let limparDados = document.getElementById('limparDados')

limparDados.addEventListener("click", function(){
    inicioValor1 = 0;
    contador1.innerHTML = 0;
    inicioValor2 = 0;
    contador2.innerHTML = 0;
    inicioValor3 = 0;
    contador3.innerHTML = 0;
    inicioValor4 = 0;
    contador4.innerHTML = 0;
    inicioValor5 = 0;
    contador5.innerHTML = 0;
})

//comandos para estilizar o btao limpar dados
let tituloLimpar = document.getElementById('tituloLimpar');
limparDados.addEventListener("mouseover", function(){
    limparDados.style.backgroundColor = "red";
    limparDados.style.transition = "all 1.2s";
    tituloLimpar.style.color = "white";
})

limparDados.addEventListener("mouseout", function(){
    limparDados.style.backgroundColor = "#1094bd"
    limparDados.style.transition = "all 1.2s";
    tituloLimpar.style.color = "black";
})


