// Verifique se a importação do arquivo correto está sendo feita.
const { expect, it } = require("@jest/globals");
const { getPokemonDetails, givesErrorOrMessage } = require("./exercise8");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :(');
    getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', (error, message) => {
        expect(error).toEqual(expectedError);
        done();
    }
  )})
    it("retorna um pokemon que existe no banco de dados", (done) => {
        const expectedMessage = 'Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun';
        function callback(erro, result) {
            expect(result).toBe(expectedMessage);
            done();
        }
        getPokemonDetails((pokemon) => pokemon.name === 'Squirtle', callback);
    })});
