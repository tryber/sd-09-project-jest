const answerPhone = answer => new Promise(function (resolve, reject) {
  setTimeout(answer ? resolve('Oi!') : reject('Infelizmente não podemos atender...'), 3000);
});
module.exports = answerPhone;
