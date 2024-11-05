
/*Considerando as variáveos x = 7 e y = 8, crie um código que mostre:
A soma dos números.
A diferença entre os números.
A multiplicação dos números.
A divisão dos números.
Dica: Utilize os operadores +, -, * e /.  */

let x=7 , y=8;  //variavel 
console.log("Soma:" ,x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x ** y);


/*2. Dado o valor let x = 10, utilize operadores de atribuição para modificar e exibir o valor de x da seguinte forma:
Adicione 5 a x.
Subtraia 3 de x.
Multiplique x por 2.
Divida x por 4.
Dica: Utilize operadores como +=, -=, *=, e /=. */

let x2 = 10;
console.log(x2 += 5);
console.log(x2 -= 3);
console.log(x2 *= 2);
console.log(x2 /= 4);
console.log("x =" ,x2);

/*Escreva um código que tenha duas strings e verifica:
Se as duas strings são iguais (utilizando ==).
Se as duas strings são diferentes (utilizando !=). */

let ola1 = "Olá, Mundo!"
let ola2 = "Olá, Mundo!"
console.log(ola1 === ola2);
console.log(ola1 !== ola2);
console.log("texto 1", ola1);
console.log("texto 2", ola2);
console.log("São iguais?", ola1 === ola2);
console.log("São diferentes ?", ola1 !== ola2)

/*4. Escreva um código que tenha dois numeros e verifica:
Se o primeiro numero é maior que o segundo.
Se o primeiro numero é menor ou igual ao segundo. */

let numero01 = 12;
let numero02 = 2;
console.log("a =", numero01);
console.log("b =", numero02);
console.log("a é menor que b", numero01>numero02);
console.log("a é menor ou igual a b?",numero01 <= numero02)
console.log("a é par?", (numero01 % 2) == 0);
console.log("O b é impar?" , (numero02 % 2) == 1);


/*
Crie um código que tenha três valores booleanos e mostre:
A conjunção de todos eles.
A disjunção de todos eles.
A negação da disjunção de todos eles.
Utilize os operadores lógicos &&, || e ! */

let p = true;
let q = false;
let r = true;

console.log(p && q && r); //false end para verdade todas precisam ser vdd
console.log(p && r && p); //true
console.log(p || q || r); //true pq em or para ser false todas precisam ser false
console.log(q || q || q ); //false
console.log(!(p || q || r)); // false

