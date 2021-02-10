const answerPhone = require("../src/asyncJest");
// This is just a comment to initial commit
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe("o retorno do telefonema", () => {
  test("atende", async () => {
    // Insira seu teste assíncrono aqui
    await expect(answerPhone('Alo!')).resolves.toBe('Oi!');
  });
  test("ocupado", async () => {
    // Insira seu teste assíncrono aqui
    await expect(answerPhone()).rejects.toBe('Infelizmente não podemos atender...');
  });
});
