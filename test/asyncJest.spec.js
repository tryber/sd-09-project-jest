const answerPhone = require("../src/asyncJest");

/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe("o retorno do telefonema", () => {
  const newAnswer = {};
  newAnswer.answerPhone = answerPhone;
  newAnswer.answerPhone = jest.spyOn(newAnswer, 'answerPhone');
  
  test("atende", async () => {
    const ans = await newAnswer.answerPhone(true)
    expect(ans).toBe('Oi!');
    expect(newAnswer.answerPhone).toHaveBeenCalled();
    expect(newAnswer.answerPhone).toHaveBeenCalledTimes(1);
  });
  test("ocupado", async () => {
    try {
      await newAnswer.answerPhone(false);
    } catch (error) {
      expect(error).toBe('Infelizmente não podemos atender...');
    }
  });
});
