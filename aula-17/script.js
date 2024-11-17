// Programação assicrona funçoes paralelas 

console.log("Antes");

setTimeout(() =>{
    console.log("Atrasado");
},2000);

console.log("Depois");

let a = 2;
a++;
setTimeout(()=> ++a,1000);
console.log(a); // vai imprimir 3 pq o log nao vai esperar 

// async e await 
// Promise - Promessa (instruções executadas de forma assíncrona)
//axios.get("https://api.github.com/users/thiagoobara").then(resposta => {
 //   console.log(resposta);
//}); //get metodo usado por todo navegador para acessar um site /them executa uma callback quando a promessa e feita 

async function buscarDadosGitHub(){
    const resposta = await axios.get("https://api.github.com/users/thiagoobara");
    console.log(resposta);
}
buscarDadosGitHub(); //função assincrona async
console.log("Depois da requi")