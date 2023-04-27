const menorValor = 1;
const maiorValor = 123;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * maiorValor + 1);
}

// document.querySelector('#menor-valor').innerHTML = menorValor;
// document.querySelector('#maior-valor').innerHTML = maiorValor;

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;

console.log('Número sorteado: ', numeroSecreto);
