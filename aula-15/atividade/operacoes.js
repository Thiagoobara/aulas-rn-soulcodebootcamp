/*Crie dois arquivos JavaScript: No primeiro arquivo (operacoes.js), defina duas funções: soma e multiplica, que recebem dois números e retornam a soma e o produto, respectivamente. Exporte ambas as funções. No segundo arquivo (app.js), importe as funções e teste-as com diferentes valores.
*/

function somar (n1 , n2){
    return n1 + n2;
}

function multiplicar (n1 , n2){
    return n1 * n2;
}

export { somar, multiplicar }; 
