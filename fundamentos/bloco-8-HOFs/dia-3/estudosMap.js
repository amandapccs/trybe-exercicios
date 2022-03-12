///Cria novo array
///Manipula array: troca variável, adiciona propriedade de obj, muda string, adiciona string;
const lista = [
    'ada.lacelove@example.com',
    'alan.turnin@example.com',
    'margeret.hamilton@example.com',
    'marie.curie@example.com'
];

const enviarEmail = (objetoEmail) => console.log(`Email para ${objetoEmail.email} com a nota ${objetoEmail.nota} enviado com sucesso`);

let listaDeEmails;
listaDeEmails = lista.map((email) => {
    return { email, nota: 10}
})

console.log(listaDeEmails);

listaDeEmails.forEach(enviarEmail)

////////////////////////////////////////////////////////////
//Usando for x usando map
const persons = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullName = []
for (let i = 0; i < persons.length; i += 1) {
    fullName.push(`${persons[i].firstName} ${persons[i].lastName}`)
}

console.log(fullName);

//Usando map:
const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);

console.log(fullNames);

////////////////////////////////////////////////////////////
//Outro exemplo:
const numeros = [10, 20, 30, 40];
const multi = (n) => n * 2;
console.log(numeros.map(multi));
console.log(numeros)
numeros.forEach((n) => console.log(n * 2));
//Diferença entra forEach e map nesse caso: forEach não tem RETORNO e precisa do console.log (se não voltaria undefined). Já o map tem retorno -> e o seu retorno é uma NOVA ARRAY 

//////////////////////////////////////////////////////////
//Outro exemplo:
const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]




//////////////////////////////////////////////////
//!!!!!! UNIÃO DE ARRAYS !!!!!!!!//
const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];
//Deseja-se unir:
//const listProducts = [{ Arroz: 2.99 },...]
const productsAndPrices = (listProducts, listPrices) => listProducts.map((element, index) => {
    return { [element]: listPrices[index]}
});
const productsPrices = productsAndPrices(products, prices);
console.log(productsPrices)