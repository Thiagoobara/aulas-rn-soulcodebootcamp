/* Crie um arquivo (math.js) com duas funções: uma chamada subtrai que retorna a diferença entre dois números e uma função padrão (export default) chamada divide que retorna a divisão de dois números. Importe ambas as funções em outro arquivo e teste-as. */

function subtrai (n1, n2) {
    return n1 - n2 ;
}

function divide (n1 , n2){
    return n1 / n2 ;
}

export { subtrai };
export default divide;