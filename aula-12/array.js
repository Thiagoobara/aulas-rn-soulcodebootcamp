let lang = "Python";
console.log(lang);
console.log(lang[5]); //n
console.log(lang[0]); //P

// vetor, array, lista, matriz
let numero = 5;
let numeros = [4, 8, 7, 1, 0 ,6 ,8, 0]; // array com x n° elementos 
console.log(numeros);
console.log(numeros[2]);
numeros[2] = 14; // isso muda o elemento apenas da posição 2
console.log(numeros);


numeros.push(3); //faz que adicione no vetor um nome elemento
console.log("depois", numeros);

console.log("posição indefinida",numeros[12]);

console.log("Comprimento",numeros.length); // comprimento retorna o comprimento do vetor 

let last = numeros.length - 1;
console.log("Ultimo", numeros[last]); // ultimo

const nomes = ["Leonardo", "Wesley", "Paulo", "Lais", "Igor", "Larrisa"];
const tamanho = nomes.length;
for (let i = 0; i < tamanho ; i++) {
    console.log("Bem vindo", nomes[i]);

}


for(let nome of nomes ){   // for each para cada vez que repetir no nome ele atribiu o bem vindo projetado para percorrer uma lista 
    console.log("Bem vindos", nome);

}


console.log("****************************");

const frutas =["Maçã" , "Laranja" , "Limão", "Pera", "Cajarana"]
frutas.push("Ciriguela")   //para inserir no final da array 
frutas.pop(); //ele remove o ultimo elemento da lista 
console.log(frutas);

console.log(frutas.includes("Caju")); // false pq nao esta na lista
console.log(frutas.includes("Maçã")); // true pq esta na lista 
console.log(frutas.indexOf("Limão"));// resultado 3
console.log(frutas.indexOf("Goiaba")); // devolve -1

frutas.splice(2, 1);// para remover um elemento do vetor  na posicao 2 , 1 x se tivesse colocado 2 iria deletar 2 elemento a partir do item selecionado
console.log(frutas);











