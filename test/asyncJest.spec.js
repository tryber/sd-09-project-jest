const answerPhone = require("../src/asyncJest");

/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.
*/

describe("o retorno do telefonema", () => {
  test("atende", () => {
    expect.assertions(1);
    return answerPhone(true).then(response => {
      expect(response).toEqual('Oi!')
    })
  });
  test("ocupado", () => {
    expect.assertions(1);
    return answerPhone(false).catch(resolve => {
      expect(resolve).toEqual('Infelizmente não podemos atender...')
    })
  });
});
