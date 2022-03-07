//Add. novas propriedades
const customer1 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  console.log(customer1);
  
  customer1.lastName = 'Faria'; // <---
  console.log(customer1);
  
  const customer2 = {
    firstName: 'Maria',
    age: 23,
    job: 'Medic',
  };
  
  console.log(customer2);
  customer2['lastName'] = 'Silva'; // <--
  console.log(customer2);

// objeto.nomeDaPropriedade
// objeto['variavelQueContemONomeDaPropriedade']



//Há diferentes formas de associar chaves e valores a um objeto:

const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  let newKey = 'lastName';
  const lastName = 'Ferreira';
  customer[newKey] = lastName; //usando variável como chave e outra variável como valor

  newKey = 'fullName';
  const fullName = `${customer.firstName} ${customer.lastName}`;
  customer[newKey] = fullName;
  console.log(customer);


  
//Exercício de fixação
const myObject = (object, key, value) => {
    const newKey = key;
    return object[newKey] = value;
}

const pessoa = {
    nome: 'Amanda',
};
const myInfo = myObject(pessoa, 'sobrenome', 'Soares');
console.log(pessoa);