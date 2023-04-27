function verificaChuteValido(chute) {
  const numero = +chute;

  if (chuteInvalido(numero)) {
    console.log('Valor inválido');
  }

  if (numeroMaiorOuMenor(numero)) {
    console.log(
      `Valor inválido> o número secreto precisa estar entre ${menorValor} e ${maiorValor}`
    );
  }
}

function chuteInvalido() {
  return Number.isNaN;
}

function numeroMaiorOuMenor(numero) {
  return numero > maiorValor || numero < menorValor;
}
