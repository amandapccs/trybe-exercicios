const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    return names.reduce((acc, curr) =>
       acc + curr.split('').reduce((acumulator, current) => {
          if (current === 'a' || current === 'A') return acumulator + 1;
          return acumulator;
       }, 0), 0);
  }

console.log(containsA())
  let nomes = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

  let quantidadeNomes = nomes.reduce(function (todosNomes, nome) {
    if (nome in todosNomes) {
      todosNomes[nome]++;
    }
    else {
      todosNomes[nome] = 1;
    }
    return todosNomes;
  }, {});
  // quantidade de nomes:
  // { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

  console.log(quantidadeNomes)
  