const mensagemResposta = document.getElementById('resposta');
mensagemResposta.innerHTML = `Diga um número entre ${min} e ${max}`;

function exibeRespostaAoChute(numeroFalado) {
    if(numeroFalado < min || numeroFalado > max || isNaN(numeroFalado)) {
        mensagemResposta.innerHTML = `Número inválido, diga um número entre ${min} e ${max}`;
    } else if(numeroFalado < numeroSecreto) {
        mensagemResposta.innerHTML = 'O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i>';
    } else if(numeroFalado > numeroSecreto) {
        mensagemResposta.innerHTML = 'O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i>';
    } else if(numeroFalado == numeroSecreto) {
        document.body.innerHTML = `<h2 id="mensagemDeAcerto">Parabéns você acertou!</h2>
                                    <h3>O número secreto era ${numeroSecreto}</h3>
                                    <button id="botao" class="btn">Jogar novamente</button>`;
    }
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'botao'){
        window.location.reload();
    }
})
