const { regions, states, cities } = require('./data')

/*
Dado um arquivo com dados de regiões, estados e cidades, crie uma função (mapCities) que retorna um objeto no qual as chaves são as siglas das regiões  (N, NE, CW, SE e S) e os valores são arrays compostos por objetos com o nome da cidade e o nome do estado.
  {
  N: [
    { city: 'Manaus', state: 'Amazonas' },
    { city: 'Belém', state: 'Pará' },
    { city: 'Porto Nacional', state: 'Tocantins' }
  ],
  SE: [
    { city: 'Lavras', state: 'Minas Gerais' },
    { city: 'Presidente Prudente', state: 'São Paulo' }
  ],
  NE: [
    { city: 'Feira de Santana', state: 'Bahia' },
    { city: 'Touros', state: 'Rio Grande do Norte' },
    { city: 'Jericoacoara', state: 'Ceará' }
  ],
  S: [ { city: 'Cascavel', state: 'Paraná' } ]
}
*/

const mapCities = () => {
  //citiesWithRegion é o {}, currentCity é o 0 de cities
  return cities.reduce((citiesWithRegion, currentCity) => {
      //se n existe obj['N'] ou obj['cities.region'] --> cria com valor array []
      if (!citiesWithRegion[currentCity.region]) {
          citiesWithRegion[currentCity.region] = [];
      }
      //acha em states.short valor igual a cities.state
      const newState = states.find((state) => state.short === currentCity.state);
      //obj que recebe novo atual de cities e nome completo do estado
      const newObject = {
          city: currentCity.name,
          state: newState.name, //no find ele encontrou: { short: 'AM', name: 'Amazonas' }, por isso usa-se .name
      }
      //empurra newObj para a chave que estava com array vazio
      citiesWithRegion[currentCity.region].push(newObject);

      return citiesWithRegion;
  }, {});
}

console.log(mapCities());