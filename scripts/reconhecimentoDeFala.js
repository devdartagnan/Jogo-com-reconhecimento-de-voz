window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const resultado = document.querySelector('#chute')
const recognition = new SpeechRecognition();
recognition.lang = 'pt-br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    const transcript = e.results[0][0].transcript;
    exibeOChute(transcript)
    validacaoChute(transcript)
}
function exibeOChute(e) {
    resultado.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${e}</span>`
}
recognition.addEventListener('end', ()=> recognition.start())