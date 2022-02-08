//OBJECTS
//Entidade independente com propriedades e tipos -> propriedade é uma associação entre uma chave e um valor.
//Ex: Cada carro tem sua cor, peso, tamanho, quantidade de portas e etc. Essas são suas características, suas propriedades. 
//OBJETO PERMITE ARMAZENAR ENTRADAS NO TIPO -> chave: valor ---------> propriedade: valor

let name = 'Milton';
let lastName = 'Nascimento';
let age = 77;
let nickname = 'Bituca';

let singer = {
    name: 'Milton',
    lastName: 'Nascimento',
    nickname: 'Bituca',
    age: 77,
    bestAlbuns: ['Travessia', 'Clube da Esquina', 'Minas'],
    bornInfo: {
        city: 'Rio de Janeiro',
        state: 'Rio de Janeiro'
    }
}

//Como acessar valores dentro de um object?
console.log('O cantor ' + singer.name + ' ' + singer.lastName + ' possui ' + singer.age + ' anos.');

//Através de colchetes:
console.log('O cantor ' + singer['name'] + ' ' + singer['lastName'] + ' possui ' + singer['age'] + ' anos.');

//Criando nova propriedade de forma dinâmica:
singer['fullName'] = singer.name + ' ' + singer.lastName;

console.table(singer)

//Objetos podem ter outros objetos como valor também e acessá-los.
console.log('O cantor ' + singer.fullName + ' ' + 'nasceu no estado do ' + singer.bornInfo.state);

//Ao invés do camelCase, pode-se usar hifen, mas com algumas alterações:
let amanda = {
    'last-name': 'Soares'
}
console.log('Meu sobrenome é: ' + amanda['last-name'])

//As chaves de um objeto são armazenadas como STRINGS!
//para conseguir acessar propriedades nomeadas com NÚMEROS, como 0, por exemplo, só é possível usando a notação de colchetes []!!!
//Se você usar a notação de ponto, ocorre um erro.

let diasDaSemana = {
    1: 'domingo',
    2: 'segunda',
    3: 'terça',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sábado',
    };
    
    diasDaSemana.1; // SyntaxError: Unexpected number
    console.log(diasDaSemana['1']); // domingo


//Outros exemplos:
let conta = {
    agencia: '0000',
    banco: {
      cod: '012',
      id: 4,
      nome: 'TrybeBank',
    },
  };
  
  let infoDoBanco = 'banco'; // armazena chave banco do objeto conta
  console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' } //objeto[variavel que encapsula chave]
  console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
  console.log(conta.agencia); // 0000
  console.log(conta['agencia']); // 0000
  
  console.log(conta.banco.cod); // 012 //usando .
  console.log(conta['banco']['id']); // 4 //usando ['']



//Mais um exemplo:
let usuario = {
    id: 99,
    email: 'jakeperalta@gmail.com',
    infoPessoal: {
      nome: 'Jake',
      sobrenome: 'Peralta',
      endereco: {
        rua: 'Smith Street',
        bairro: 'Brooklyn',
        cidade: 'Nova Iorque',
        estado: 'Nova Iorque',
      },
    },
  };
  
console.log(usuario['id']); // 99
console.log(usuario.email); // jakeperalta@gmail.com
  
console.log(usuario.infoPessoal.endereco.rua); // Smith Street
console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque



//Se objeto está dentro de uma ARRAY? COMO ACESSÁ-LO?
let moradores = [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ];
  
  let primeiroMorador = moradores[0];
  console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
  console.log(primeiroMorador['andar']); // 10
  console.log(primeiroMorador.nome) // Luiza
  
  let ultimoMorador = moradores[moradores.length - 1];
  console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
  console.log(ultimoMorador.nome); // Zoey

  ///////////////////////////////////////////
  //Exercícios de fixação
  let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
  }
  console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');
  console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');
  console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');