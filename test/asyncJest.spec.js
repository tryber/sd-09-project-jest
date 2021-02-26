const answerPhone = require("../src/asyncJest");

/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe("o retorno do telefonema", () => {
    // Insira seu teste assíncrono aqui
  test("atende", async () => {
      //assert.fail();
      expect.assertions(1);
      const answer = await answerPhone(true);
      await expect(answerPhone(true)).resolves.toBe('Oi!');
  });
    // Insira seu teste assíncrono aqui
  test("ocupado", async () => {
      //assert.fail();
      expect.assertions(1);
      await expect(answerPhone(false)).rejects.toEqual('Infelizmente não podemos atender...');
  });
});
