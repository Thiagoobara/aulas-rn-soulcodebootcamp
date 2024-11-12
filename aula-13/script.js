const linguagem = "JavaScript";
console.log(linguagem[0]); //J

for(let letra of linguagem){ // pode ser usado para percorrer 
    console.log(letra);
}

console.log(linguagem);
console.log(linguagem.toLowerCase()); // nao altera o valor original, nesse caso ficaria todo em minusculo 
console.log(linguagem.toLocaleUpperCase());// Maiusculo
console.log(linguagem.endsWith("Script")); // true ,ele quer saber como termina  ex arquivo com final .pdf
console.log(linguagem.startsWith("Java")); //true , pq inicia com a paravra .
console.log(linguagem.includes("va")); // true, pq ele procura no meio,começo ou fim  da palvra se contem o que foi pedido 
console.log(linguagem.indexOf("a"));// 1
console.log(linguagem.lastIndexOf("a")); // retona o ultimo exfoi pedido a retorna a posicao index do ultimo a 
console.log(linguagem.replace("Java" , "Type")); //substitui a palavra
console.log(linguagem.slice(2, 6)); // fatiar ex Ja[vaS]cript fatia 

const nome ="Thiago Obara";
const curso = "Full Stack";
console.log("Bem vindo", nome ,"ao curso", curso);
console.log(`Bem vindo ${nome} ao curso ${curso}`); //usa crazer e o ${}


const numero1 = 45;
const numero2 = 15;
console.log(`a soma de ${numero1} e ${numero2} é igual a ${numero1 + numero2}`); //usando craze interpolação 

console.log("**************************************")

const pessoa ={
    nome:"Thiago",
    idade: 38
};
console.log(pessoa.nome); // saida Thiago
pessoa.idade= 31;
console.log(pessoa["idade"]); // saida 31

pessoa.salario = 2000; //nova propriedade no objeto
pessoa["salario"] += 50; //ou, pessoa.salario += 50 
console.log(pessoa)

const papagaio ={
    nome : "José",
    idade: 5,
    cumprimentar: function(papagaio){
        console.log("Ola "  + papagaio + "!");
    }
};
papagaio.cumprimentar("Loro");


const pessoa1 = {
    nome1 : "Thiago",
    idade : 38,
    falar: function() {
        console.log('Ola meu nome é ' + this.nome1 + 'e tenho' + this.idade + 'anos');
    }

}

    