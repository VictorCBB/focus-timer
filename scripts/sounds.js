import { 
    buttonFlame, 
    buttonForest, 
    buttonRain, 
    buttonVoices 
} from "./elements.js"

export default function () {
    const buttonPressAudio =new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer =new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const forestAudio =new Audio("../sounds/Floresta.wav")
    const rainAudio =new Audio("../sounds/Chuva.wav")
    const voicesAudio =new Audio("../sounds/Cafeteria.wav")
    const flameAudio =new Audio("../sounds/Lareira.wav")
    
    forestAudio.loop = true
    rainAudio.loop = true
    voicesAudio.loop = true
    flameAudio.loop = true

    function pressButton() {
        buttonPressAudio.play();
    }

    function timeEnd() {
        kitchenTimer.play()
    }
    
    function forestOnOff() {
        if (buttonForest.classList.contains("on")) {
            forestAudio.play()
        } else {
            forestAudio.pause()
        }
    }

    function rainOnOff() {
        if (buttonRain.classList.contains("on")) {
            rainAudio.play()
        } else {
            rainAudio.pause()
        }
    }    

    function voicesOnOff() {
        if (buttonVoices.classList.contains("on")) {
            voicesAudio.play()
        } else {
            voicesAudio.pause()
        }
    }
    
    function flameOnOff() {
        if (buttonFlame.classList.contains("on")) {
            flameAudio.play()
        } else {
            flameAudio.pause()
        }
    }  

    return {
        pressButton,
        timeEnd,
        forestOnOff,
        rainOnOff,
        voicesOnOff, 
        flameOnOff
    }
}

