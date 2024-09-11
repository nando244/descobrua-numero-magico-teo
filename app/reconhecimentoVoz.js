const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const chuteElement = document.getElementById('chute');

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br';
recognition.start();

recognition.addEventListener('result', oneSpeak);

function oneSpeak(e) {
  const chute = e.results[0][0].transcript;
  exibeChuteNaTela(chute);
  verificaValorChuteValido(chute)
}

function exibeChuteNaTela(chute) {
  chuteElement.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
  `;
}
