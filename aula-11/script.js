let idade = 15;
let autorizacaoPais = false;

if (idade >= 18 || autorizacaoPais ) {
    console.log("Pode viajar.");
} else{
    console.log("Não pode viajar.")    //tem que ser imediatamente apos o if fechar
}


console.log("Depois do IF/ELSE.");

let clima ="tenso";
if(clima =="ensolarado"){
    console.log("Hoje vou pescar!");
} else if (clima == "nublado") {
    console.log("Hoje vou fazer compras!.");
} else if (clima == "ameno"){
    console.log("Hoje vou caminhar");
}else {
    console.log("Hoje vou dormir.");
}


let n = 37;
if(n > 40 || false){
    console.log("Pegadinha");

}

let num = -55;
console.log((num % 2 == 0)?"Par" : "Impar"); /*  ternario forma de resumir if else*/
console.log((num<0) ? "Negativo" : "Possitivo");



let dia = 2;
switch(dia){
    case 1:
        console.log("Domingo");
        break; //para quebra o fluxo
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta")
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break;
    case 7:
        console.log("Sabado");
        break;

    default: // igual else para imprimir o que nao foi achado 
        console.log("Esse dia não existe");

 }

 // considerando 3 n° diferentes, construa um programa que determine quem sera o maior o menor e o intermediario


let a = 10 , b = 12, c = 22;
if (a > b){
    if (b > c){
        console.log(a, ">",b, ">", c);
    } else if (a>c){
        console.log(a, ">",c, ">", b);
    } else {
        console.log(c, ">",a, ">", b);
    }

} else if(b>c){
    if (a > c) {
        console.log(b, ">",a, ">", c);
    }else{
        console.log(b, ">",c, ">", a);
    }
}else{
    console.log(c, ">",b, ">", a);
}




