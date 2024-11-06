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