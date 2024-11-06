let contador = 10;
while (contador > 0 ){   //expressao logita que retorne bool
    console.log(contador);
    contador--;
}

// while(true){   loop infinito tomar muito cuidado 
//     console.log("OI.")

// }


let palavra = "Thiago Obara";
let posicao = 0;
while(palavra[posicao] !== "a" ){ // != e o mesmo que diferente de
    console.log(palavra[posicao]);
    posicao ++;

}

for (let contador = 0; contador < 10; contador ++){ // ++ no pos, smpre sera essas 3 parte 
    console.log(contador);
}


console.log("---------------------------")
let x = 12;
let y = 700;
for(let i = x ; i < y ; i++){
    if (i % 7 == 0){
        console.log(i);
        break; //faz que o loop atual seja quebrado
        
    }
}

//while indeterminado pois nao sabemos quantas vezes sera ex colocar senha

// for determinado pois sabemos quantas vezes vai se repetir 


console.log("************");

for (let i = 15, c = 0; i < 50; i++){
    if(i % 6 == 0){
        console.log(i);
        c++;  // para adionar 1 ao c 
    }
    if(c == 3){
        break;
    }

}
console.log("++++++++++++++++++++++")

for (let i = 0; i < 10; i++){
    if ( i % 3 == 0){
        continue; // ele pula e nao imprime
    }
    console.log(i);
}


