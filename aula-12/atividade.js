// 1. Crie um programa que receba um vetor de números e mostre a soma de todos os elementos. Utilize um loop while para percorrer o vetor e somar cada elemento.

let numeros = [12, 90, 22, 17, 56, 49, 46, 34, 10];
let i = 0;
let tamanho = numeros.length; // para ler toda lista
let soma = 0;
while (i < tamanho) {
    soma += numeros[i];
    i++;
}
console.log("Soma:", soma);


// 2. Escreva um programa que recebe um vetor de números e mostre a quantidade de números pares no vetor. Use um loop while para verificar cada elemento e um contador para contar os números pares.

let n = 0;
let pares = [];
let tam = numeros.length;

while (n < tam) {  
    if (numeros[n] % 2 === 0) {
        pares.push(numeros[n]); 
    }
    n++;
}
console.log("Pares:", pares);
console.log("Quantidade de números pares:", pares.length);




    
// 3. Crie um programa que receba um vetor de strings e imprima cada item com uma mensagem personalizada, por exemplo: "Item: maçã", "Item: banana", etc. Utilize o loop for...of para percorrer o vetor e exibir cada item.

let supermercado = ["maçã", "banana", "laranja", "uva"];
for (let item of supermercado) {
    console.log("Item:", item);
}

// 4. Desenvolva um programa que receba um vetor de números e um valor multiplicador. O programa deve mostrar um novo vetor com cada elemento multiplicado pelo valor fornecido.


let multiplicador = 3; // Pode alterar o valor do multiplicador conforme necessário
let numeros3 = [1, 2, 3, 4, 5];
let resultado = [];
for (let numero of numeros3) {
    resultado.push(numero * multiplicador);
}
console.log("Novo vetor:", resultado);


// 5.  Escreva um programa que receba um vetor de números e mostre o maior valor contido nele. Utilize um loop for para comparar cada valor e encontrar o maior.

let numeros4 = [10, 5, 8, 20, 3];
let maior = numeros4[0]; 

for (let numero of numeros4) { 
    if (numero > maior) { // Comparar cada número com "maior"
        maior = numero;
    }
}
console.log("Maior:", maior);
