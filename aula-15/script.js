//Metodo This
// POO programação orientada a objeto classe representação ao da vida o objeto é a classe pronta toa classe tem que ser com a letra inicial Maiuscula 

const pessoa = {
    nome: "Thiago Obara",
    idade: 38,
    cumprimentar: function () {
        console.log(`Olá meu nome é  ${this.nome}.`)

    }
}

console.log(pessoa);
pessoa.cumprimentar();

// Funções Construtores. Função que cria um novo objeto (instância)

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;

}
const pessoa2 = new Pessoa("Thiago", 38) // para chamar precisa colocar new
console.log(pessoa2);

// Operadir Spread (Espalhar) para espalhar para outro objeto
const produto1 = {
    descricao: "Manga Vermelha" ,
    preco: 2.5,
    categoria: "Frustas e Hortaliças"
    
};
const produto2 = {...produto1};// copiando tudo de produto1 para o produto2
produto1.descricao = "Manga azul";
console.log(produto1.descricao);
console.log(produto2.descricao);


// Desestruturação (Destruct)
const produto3 = {
    descricao: "SSD 512GB",
    preco: 400
};
//const descricao = produto3.descricao;  //antes
const { descricao , preco } = produto3; // destruturação de objeto
console.log(descricao); // SSD 512GB 
console.log(preco);

const pessoa3 = {
    nome: "Pedro",
    endereco:{
        bairro: "rodeio",
        rua: "Bom fim",
        nasc: "24/11/2000"
               
    }
};

const {nome , endereco:{rua, bairro, nasc}} = pessoa3;
console.log(nome);
console.log(nasc);

const venda ={
    cliente: "Claudio",
    data: "12/12/2011",
    nota: {
        codigo: "01124551",
        tipo: "xml"
    }
};
const {cliente, nota:{codigo}} = venda;
console.log("cliente", cliente);
console.log("codigo", codigo);

const nomes = ["rodrigo", "Thiago" , "Leonardo"]; // destruturação de vetor array (lista)
const [primeiro , segundo , terceiro] = nomes;
console.log(primeiro);
console.log(segundo);


const tarefas =[  //lista de objetos
    {desc:"Estudar JavaScript"},
    {desc:"Academia"},
    {desc: "Sair com o cachorro"},
];
const [{ desc }] = tarefas;
console.log(desc);

const nomes2 = [... nomes]; // copiar lista
console.log(nome2);