// Modulos ou bibliotecas

import { dividir as div, multiplicar } from "./calculadora.js";  // para importar  o "as" serve para dar um apelido
import calculadora from "./calculadora.js"

//Match 
console.log(Math.sqrt(121));
console.log(Math.ceil(4.4)); //arredonda para cima
console.log(Math.floor(4.4)); // arredonda para baixo
console.log(Math.ceil(100 / 3)); // é 33.33 e fica 34
console.log(Math.round(4.6)); // arredonda para o mais proximo ex 4.4 esta mais perto do floor se fosse 4.5 arredonda para p ceil cima.
console.log(Math.pow(6, 3)); //216
console.log(Math.cbrt(125)); //raiz cubica 
console.log(Math.abs(-9)); // valor aboluto como se fosse um distancia 

const rand = Math.random(); // valor aleatorio/randomico/pseudoaleatorio
console.log("Aleatorio entre 0 a 10: ", Math.floor(rand * 10) + 1); // Math.floor arredonda. rand*10 seria do 0 a 9 o + 1 para poder chegar a 10
console.log(Math.max(1, 6, 9, 2));// para maior
console.log(Math.min(1, 6, 9, 2));// para menor 

console.log(multiplicar(4, 5));
console.log(div(21, 3));

console.log(calculadora(2, 2));


//Funções recursivas e uma função que chama a si propria sem 
// Fatorial !5 = 5 * 4 * 3 * 2 * 1 ;

function fatorial (numero){
    if (numero == 1){
        return 1;
    } else{
       return numero * fatorial (numero -1);
    }
}
console.log(fatorial(5)); //120