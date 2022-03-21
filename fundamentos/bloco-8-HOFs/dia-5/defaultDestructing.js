//O que acontece quando tentamos acessar:
//uma propriedade que não existe em um objeto?
//um valor em uma posição inexistente em um array?
//Ou seja:
const persona = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
  };
  
  const { nationaliity } = persona;
  console.log(nationaliity) ///undefined


//Dá pra atribuir valor a nationality com default destruturing;
  const { nationalityy = 'Brazilian' } = persona;
  console.log(nationalityy); // Brazilian




//O mesmo pode ser feito com ARRAYS:
  const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0



//Fixação:
const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));