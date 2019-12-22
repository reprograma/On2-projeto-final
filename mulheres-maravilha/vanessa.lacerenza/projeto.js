const a = 10;
const b = 33;

function somar (a,b) {
    return parseInt(a) + parseInt(b);
}

// console.log(somar(2,5));

document.querySelector("#calcular").addEventListener("click", function (){
    
    let ValorA = document.querySelector("valorA");
    let ValorB = document.querySelector("valorB");
    if(valorA.length > 0 && valorB.length > 0){
    alert(parseInt(ValorA) + parseInt(ValorB));

    }else {
        alert("digite os valores para o cálculo da sorte");
        soma = ValorA + ValorB;
        alert(soma);
    }

    
    
} );
