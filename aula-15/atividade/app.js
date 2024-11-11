import { somar , multiplicar } from "./operacoes.js";

console.log(somar(5 , 5));
console.log(somar(12 , 7));
console.log(multiplicar(5,2));
console.log(multiplicar(10,8));

import {subtrai as subt } from "./math.js";
import divide from "./math.js"

console.log(divide(10, 2));
console.log(subt(10 , 5)) ;

/* Crie dois vetores de números, vetor1 e vetor2, com valores distintos. Crie uma função que receba ambos os vetores e retorne um novo vetor que combine todos os elementos dos dois vetores. Use o operador spread para concatenar os vetores.*/

const vetor1 = [1, 3, 5, 7];
const vetor2 = [2, 4, 6, 8];
const vetor3 = [...vetor1, ...vetor2];
console.log(vetor3);

/* Crie um objeto usuario com as propriedades nome, idade, e email. Crie um novo objeto usuarioCompleto que contenha todas as propriedades de usuario mais uma propriedade adicional, telefone. Use o operador spread para copiar as propriedades. */
const nome ="Thiago";
const email= "thiago@email. "
const usuario = {
    nome, //nome : nome
    idade: 38,
    email
    
}
console.log(usuario);
const usuarioCompleto = {...usuario, telefone : "119994-5554"};
console.log(usuarioCompleto);


/*Crie um objeto livro com as propriedades titulo, autor, ano e genero. Use destructuring para extrair titulo genero e  autor em variáveis separadas e exiba essas variáveis no console.*/

const livro = {
    titulo:"Montanha ",
    genero: "Natureza",
    autor:{
        nomeAutor: "Valmir Silva",
        nacionalidae: "Brasileiro"
    },
    ano: 2014
};
const { titulo, genero , autor:{ nomeAutor }}= livro;
console.log(titulo, genero, nomeAutor);
