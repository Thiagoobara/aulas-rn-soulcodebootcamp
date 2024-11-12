console.log("Há quanto tempo html. Tudo bem?");
console.log(document);

//DOM não é um recurso do Node.jss

//document.getElementById(); // busca pelo id
//document.getElementsByTagName(); busca pela tag
//document.getElementsByClassName(); busca pela classe
//document.querySelector(); busca pelo seletor
//document.querySelectorAll(); busca pelo seletor 

//sempre usar document. antes do metodo// se guarada em uma variavel 

const titulo = document.getElementById("titulo");  //busca por um elemento unico
console.log(titulo);

const paragrafos = document.getElementsByTagName("p") //busca pela tag busca varios, ele retorna uma lista 
console.log(paragrafos);

const itens = document.getElementsByClassName("item"); // retona uma lista
console.log(itens);

const titulo2 = document.querySelector("#titulo"); // # para selecionar o melhor pois busca pelo seletor # e retorna so 1
console.log(titulo2);

const itens2 = document.querySelectorAll(".item"); // o ponto serve para puxar a class ex .item puxa todos o que tem a class item
console.log(itens2);

//titulo2.textContent = "JavaScript é mel."; // mudou o texto da tag titulo pode ser o titulo2.innerText

titulo2.innerHTML="JavaScript é <em>mel</em>."; //ele usa o codigo msm dentro das ""

const capa = document.querySelector("#capa");




setTimeout(() => {

    titulo2.style.color ="tomato"  //conseguimos mudar qualquer  estilo do elemento usando style
    titulo2.style.fontFamily ="Arial" ;
    titulo2.style.backgroundColor = "pink"; //nao indicado 

    capa.style.border = "5px dashed purple"
    capa.src = "https://images.unsplash.com/photo-1632803227975-b6a5688c9c46?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}, 3000); // função nativa, recebe dois parametros callback (recebe uma função) e recebe uma informação em milisegundos  função de delay

const msg = document.querySelector("#msg")  
setTimeout(()=> {
    msg.classList.add("erro");
    msg.innerHTML="algo deu errado"
},2000);
setTimeout(()=>{
    msg.classList.remove("erro");
    msg.classList.add("ok");
    msg.innerText="agora ta tudo ok!"

},400);

//crie a classe utiliza o nome dela como referencia para mudar o estilo



