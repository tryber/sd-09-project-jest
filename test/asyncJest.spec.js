const answerPhone = require("../src/asyncJest");

/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe("o retorno do telefonema", () => {
  test("atende", () => {
    // assert.fail();
    // Insira seu teste assíncrono aqui
    answerPhone(true).then(answer => 
      expect(answer).toEqual('Oi!'));
  });
  test("ocupado", () => {
    // assert.fail();
    // Insira seu teste assíncrono aqui
    // expect(answerPhone(false)).toBe('Infelizmente não podemos atender...');
    answerPhone(false).catch(error => 
      expect(error).toEqual('Infelizmente não podemos atender...'));
    });
  });
// ATENÇÃO!!! Não edite este arquivo. Altere apenas os arquivos da pasta 'test'.
