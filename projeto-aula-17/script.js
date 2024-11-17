function insert(num){ //para saber que esta vindo um numero
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML= numero + num; //ele vai em resultado no texto, e acrescenta mais um n° parte de inserir 
}
function clean(){           //para limpar o cursor
    document.getElementById("resultado").innerHTML = ""
}
function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML= resultado.substring(0, resultado.length -1); //assim ele apaga da esquerda começando na pos 0
}
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado){
        document.getElementById('resultado').innerHTML=eval(resultado);
    }


}