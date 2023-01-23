const min = 50;
const max = 100;

function sorteiaNumeroSecreto (max) {
    return Math.floor(Math.random() * (min - max - 1) + max + 1);
}

const numeroSecreto = sorteiaNumeroSecreto(max);

console.log(numeroSecreto);

// ALTERANDO O MAIOR E O MENOR VALOR NO HTML

const maiorValor = document.getElementById('maior_valor');
const menorValor = document.getElementById('menor_valor');

maiorValor.innerHTML = max;
menorValor.innerHTML = min;