'use strict';



function play(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}]"`); //data-key trobuto creado, evento.keyCode (propiedad del objeto)
    const key = document.querySelector(`.key[data-key="${e.keyCode}]"`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function stopTransition (e){
    if(e.propertyName !=='trasition')
    return;
    e.target.classList.remove('playing');
}

document.addEventListener('keydown', play);