//Map - manipula array com valores do array original modificado
//Todo map retorna array com mesmo número de elementos do original
const numeros = [2, 3, 6, 5, 10];
const multiNumeros = numeros.map((numero) => numero * 2)
// console.log(multiNumeros)

//nomes minúsculos
const nomes = ['Ayrton', 'Teshima', 'Teste', 'Fulano de Tal'];
const nomesMin = nomes.map((nome) => nome.toLowerCase())
// console.log(nomesMin)


//Filter - se retorna true armazena valor no array, se retorna false não armazena nada no novo array.
//filtrar multiplos de 2
const multiplos2 = numeros.filter((numero) => numero % 2 === 0)
// console.log(multiplos2)
//também daria assim + map:
const arrayMapFilter = numeros
    .filter((numero) => numero % 2 === 0)
    .map((numero) => numero * 2);

// console.log(arrayMapFilter)


//Reduce -> itera sob um array -> pode retornar array, objeto, número, string -> =/= do map e filter que só retornam arrays
//fazendo com for:
let sum = 0;
for (let i = 0; i < numeros.length; i += 1) {
    sum += numeros[i];
}
console.log(sum)

//com reduce:
//é uma função que espera 2 parâmetros: 1 é uma função e o outro é o valor inicial
//esse outro parâmetro tem o mesmo valor de "let sum = 0", é o valor inicial
//se vc quer que reduce retorne um número, o valor inicial é 0
//se quiser que reduce retorne objeto -> .reduce((function() {}), {}) // ou string -> .reduce((function() {}), '')
//primeiro parâmetro da callback é o VALOR ATUAL -> na primeira iteração do reduce o valor inicial é o 0 -> aquele passado como segundo parametro do reduce ----> tb chamado de valor acumulador 
const numerosSomados = numeros.reduce((function(valorAcumulador, numero) {
    return valorAcumulador + numero;
}), 0);
// console.log(numerosSomados);
//com arrow function:
const numerosSum = numeros.reduce((valorAcumulador, numero) => valorAcumulador + numero, 0);
console.log(numerosSum);

//outro exemplo reduce:
const pessoas = [
    { nome: 'Dani', idade: 16},
    { nome: 'Amanda', idade: 26},
    { nome: 'Mateus', idade: 27},
    { nome: 'Renato', idade: 17}
]

const pessoasAgrupadas = pessoas.reduce(function(valorAcumulador, valorArray) {
    //se o elemento.idade for >=18 ele retorna string maiores ou menores
    const maiorOuMenor = valorArray.idade >= 18 ? 'maiores' : 'menores';
    //o valorAcumular que é { maiores: [], menores: [] } -> vai ter sua propriedade acessada -> se >18 é maiores -> então valorAcumulador['maiores'] ---> e como a propriedade é um array, é só dar push no elemento atual que é maior de idade
    //se a propriedade não fosse um array, como empurrar valor para a chave? --> valorAcumulador[maiorOuMenor] = valorArray :)
    valorAcumulador[maiorOuMenor].push(valorArray);

    return valorAcumulador;
}, { maiores: [], menores: [] });

console.log(pessoasAgrupadas);

console.log(pessoasAgrupadas['maiores'][1].nome, pessoasAgrupadas['maiores'][1].idade)