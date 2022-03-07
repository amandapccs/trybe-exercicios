// Object.entries
// Retorna um array cujo elementos são arrays com chave + valor.

const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };
  
  console.log(Object.entries(coolestTvShow));
  
  // [
  //   [ 'name', 'BoJack Horseman' ],
  //   [ 'genre', 'adult animation' ],
  //   [ 'createdBy', 'Raphael Bob-Waksberg' ],
  //   [ 'favoriteCharacter', 'Princess Carolyn' ],
  //   [ 'quote', 'Princess Carolyn always lands on her feet.' ],
  //   [ 'seasons', 6 ]
  // ]




  //Exemplos:

  const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
  };
  const pairKeyValue = Object.entries(países);
  console.log(pairKeyValue);

  //para ver cada valor separadamente:
  for(index in pairKeyValue) {
    console.log('--------');
    console.log('País:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]);
  };