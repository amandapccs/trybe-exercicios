// Criar funções com número ILIMITADO DE ARGUMENTOS
//Permite criar funções que recebam número variável de argumentos
//Funções + flexíveis
//Os argumentos que serão passados como parâmetro são salvos em um array que pode ser acessado de dentro da função.
//Permite usar length
function quantosParams(...args) {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}
  
console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

//Reduce e rest:
const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88