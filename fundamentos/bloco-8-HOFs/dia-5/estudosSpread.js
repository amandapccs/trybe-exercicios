//Para add. algo a um array usamos push
//Mas assim sobrescrevemos o original:
const numbers = [1, 2, 3];
numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

//Em casos que é necessário MANTER AS INFORMAÇÕES ORIGINAIS e CRIAR UMA CÓPIA usa-se SPREAD
//Spread combina arrays e objetos
//Copiar valores de objetos
//PROMOVE IMUTABILIDADE NO CÓDIGO

//Exemplo:
const carros = ['Gol', 'HB20', 'Focus'];
const motos = ['Biz', 'R1'];

const veiculos = ["F40", ...carros, "Uno", ...motos]; //ordem importa: ...motos,
// [array[0], array[1], array[2], array2[0], array2[1]]
console.log(veiculos)




//OBJETOS:
const pessoa = {
    nome: 'Nádia',
    idade: 28,
    cidade: 'BH'
}
const conhecimentosTrybe = {
    softSkills: true,
    hardSkills: true,
    trabalho: true,
}

const pessoaTryber = {
    ...pessoa,
    ...conhecimentosTrybe,
    esporte: 'Corrida',
}

console.log(pessoaTryber);

//+ um exemplo com obj:
const people = {
    id: 101,
    name: 'Alysson',
    age: 25,
  };
  
  const about = {
    address: 'Av. Getúlio Vargas, 1000',
    occupation: 'Developer',
  };
  
  const customer = { ...people, ...about };
  console.log(customer); /* {
    id: 101,
    name: 'Alysson',
    age: 25,
    address: 'Av. Getúlio Vargas, 1000',
    occupation: 'Developer'
  } */





///Exemplo ARRAYS

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months);
/* [
  'JAN', 'FEV', 'MAR',
  'ABR', 'MAI', 'JUN',
  'JUL', 'AGO', 'SET',
  'OUT', 'NOV', 'DEZ'
] */



//Como PARÂMETRO em função
// A função recebe como parâmetros o peso e a altura da pessoa -> que foram salvos no array patientInfo
const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76

//Aplicar em funções prontas:
const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5



///Fixar:
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maça', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'leite ninho'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));