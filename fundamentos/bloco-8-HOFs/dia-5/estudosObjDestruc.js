//como você faria para imprimir o valor de cada propriedade do objeto product ?
const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };
//console.log(product.name) ... e todas as propriedades, tarefa repetitiva e verbosa

//object destructuring serve para ACESSAR VALORES DE OBJ DE FORMA MAIS SIMPLES
//A sintaxe da desestruturação de objetos pede para passarmos o nome das propriedades que queremos acessar do lado esquerdo, entre chaves, e o objeto do lado direito:
const { name, seller } = product;
console.log(name); // Smart TV Crystal UHD
console.log(seller); // Casas de Minas

//E se a chave do obj contiver outro objeto como valor?
// definindo o objeto
const character = {
    nome: 'Luke SkyWalker',
    age: '53',
    description: {
      specieName: 'Human',
      jedi: true,
    },
    homeWorld: {
      name: 'Tatooine',
      population: '200000',
    },
  };
  
  // desestruturando o objeto:
  const { nome, age, homeWorld: { name: planetName }, description: { jedi } } = character;
  
  // imprimindo os valores:
  console.log(`Esse é o ${nome}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);




  ///Obj Destruc + Spread
  const daysOfWeek = {
    workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    weekend: ['Saturday', 'Sunday'],
  };
  
  const { workDays, weekend } = daysOfWeek;
  console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  console.log(weekend); // ['Saturday', 'Sunday']
  
  const weekdays = [...workDays, ...weekend];
  console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']



///Reatribuindo o nome da propriedade que deseja acessar ao declará-la como uma variável:
//O que já foi feito em homeWorld: { name:planetName }

const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
  };
  
  const { a: namee, b: classAssigned, c: subject } = student;
 // seguindo a sintaxe: { propriedade:nomeVariável } = objeto 
  
  console.log(namee); // Maria
  console.log(classAssigned); // Turma B
  console.log(subject); // Matemática

  //Usando valores de objetos como parâmetros em uma função!!
  const products = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };
  
  const printProductDetails = ({ name, price, seller }) => {
    console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
  };
  
  printProductDetails(products); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas


  ///Fixação

const user = {
    naame: 'Maria',
    aage: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

const { naame, aage, nationality } = user;
const { profession, squad, squadInitials } = jobInfos;
const personJob = {
    naame,
    aage,
    nationality,
    profession,
    squad,
    squadInitials
}
console.log(personJob);

//2
const phrase = `Hi, my name is ${naame}, I'm ${aage} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`;
console.log(phrase);