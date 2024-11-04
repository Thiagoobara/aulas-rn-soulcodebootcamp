// console.log("Hello World II")

let nome = "Thiago Obara"
let idade = 38;
let nota= 8.7;


idade= 23;
nota= 6.5;


console.log(nome, idade, nota);





let goigaba;



const MASKCCPF= "000.000.000-00"; /*constante GERALMENTE SE USA LETRAS MAIUSCULAS*/
// maskCpf= "novo valor"


let tipo;
console.log(typeof tipo); //underfined
tipo = "lorem"; 
console.log(typeof tipo); //string
tipo = 24;
console.log(typeof tipo); //number
tipo= false;
console.log(typeof tipo); // boolean
tipo = null ;
console.log(typeof tipo); //null


const x = 12 , y = 6;
console.log(x+y); // soma

console.log(x-y); // dimin

console.log(x * y); // mult

console.log(x / y); // divi

console.log(x % y); // rest da div

console.log (x ** y); // expo

console.log(5 / 3);

const per = 75;
const num = 200;

console.log(num*(per/100))

let a = 5, b= 6, c=3;  /*atribui na msm linha as 3 variaveis */

let delta = (b ** 2) + (4* a *c);
console.log(delta)


let numero = 7;
numero += 5; //12
numero *= 3 ; // 36
numero /= 9; //4
numero -= 12; // -8


console.log(numero);

numero = 2;


console.log(numero++);  /* adiciona uma unidade  2, numero =3*/
console.log(++numero); // 4 numero =4
console.log(numero--); // 4 numero = 3
console.log(--numero); // 4 numero =2

numero++;
console.log(numero); //2, numero = 3

/*comparação*/

console.log(6==6);   // true
console.log("6"=== 6); // false pq o javascr reconhece 
console.log(4>7);   // false
console.log(4<7);  //true
console.log(9>9); //false
console.log(9 >=9); // true
console.log(7 > 7); // false
console.log(7 >=7); // true
console.log("6" !== 6); //true a ! compara se sao diferentes no tipo
console.log("6" != 6); //false eles nao sao diferentes 
console.log("Thiago " == "thiago"); // false nao sao iguais
console.log("Thiago " != "thiago"); // true pq sao diferentes 


//logicos

let p = true;
let q = false;

// conjunção - E -  and - &&
// disjunção - ou - OR  - ||
// negação   - Não -Not -  !

console.log(p && q); //false 
console.log(p || q); // true
console.log(p && p); //true 
console.log(!p || q); // false
console.log(!(p || q)); // false ele nega a operação 


// 1 ° aritimetico > 2° comparação > 3° logico
console.log((4*3) > 125 || (6%3 ==1) || (90*2*0.5) ==(110 -20));











