const answerPhone = require("../src/asyncJest");

/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe("o retorno do telefonema", () => {
  const copyFunction = answerPhone;
  test("atende", () => {
    expect(copyFunction(true)).resolves.toBe('Oi!');
  });
  test("ocupado", () => {
    expect(copyFunction(false)).rejects.toBe('Infelizmente não podemos atender...');
  });
});
