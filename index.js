var x = 5;
var y = 7
let numeros = [5, 10, 17, 20, 29, 35, 41, 50, 61, 70];
let soma = 0
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

let media = soma / numeros.length;

console.log("A média dos números é:", media);

function ehPrimos(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <=Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
           }
        return true;
}

let primos = numeros.filter(ehPrimos);
console.log("Números primos no vetor:", primos);