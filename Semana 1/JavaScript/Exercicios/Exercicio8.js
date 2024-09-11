function calculo(a, b, c) {
    return ((a + b) / c).toFixed(2);
}

function imprimeDuasString(str1, str2) {
    return console.log(`${str1} de ${str2}`);
}

let coletaPrimeirasLetras = (palavra) => {
    return palavra.substring(0, 2);
}

// Exercicio 6
let a = 40;
let b = 5;
let c = 2;

console.log(calculo(a, b, c));

// Exercicio 7
const compromisso = "Aula";
const conteudo = "Frontend";

imprimeDuasString(compromisso, conteudo)
console.log(coletaPrimeirasLetras(compromisso));