window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    const numeroFalado = e.results[0][0].transcript;
    
    exibeChuteNaBox(numeroFalado);
    exibeRespostaAoChute(numeroFalado);
}

recognition.addEventListener('end', () => recognition.start());