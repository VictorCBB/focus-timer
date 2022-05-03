import { 
    buttonPlay,
    buttonStop,
    buttonPlus,
    buttonLess,
    buttonForest,
    buttonRain,
    buttonVoices,
    buttonFlame
} from "./elements.js"

export default function ({ controler, timer, sounds }) {
    buttonForest.addEventListener('click', () => {
        controler.playPauseForest()
        sounds.forestOnOff()
        sounds.rainOnOff()
        sounds.voicesOnOff()
        sounds.flameOnOff()
    })

    buttonRain.addEventListener('click', () => {
        controler.playPauseRain()
        sounds.forestOnOff()
        sounds.rainOnOff()
        sounds.voicesOnOff()
        sounds.flameOnOff()
    })

    buttonVoices.addEventListener('click', () => {
        controler.playPauseVoices()
        sounds.forestOnOff()
        sounds.rainOnOff()
        sounds.voicesOnOff()
        sounds.flameOnOff()
    })
    
    buttonFlame.addEventListener('click', () => {
        controler.playPauseFlame()
        sounds.forestOnOff()
        sounds.rainOnOff()
        sounds.voicesOnOff()
        sounds.flameOnOff()
    })

    buttonPlay.addEventListener('click', () => {
        sounds.pressButton()
        timer.countdown()
    })

    buttonStop.addEventListener('click', () => {
        sounds.pressButton()
        timer.reset()
    })

    buttonPlus.addEventListener('click', () => {
        let newMinutes = controler.plusMinutes()
        timer.updateDisplay(newMinutes, 0)
        timer.updateMinutes(newMinutes)
        sounds.pressButton()
        timer.reset()
    })

    buttonLess.addEventListener('click', () => {
        let newMinutes = controler.lessMinutes()
        timer.updateDisplay(newMinutes, 0)
        timer.updateMinutes(newMinutes)
        sounds.pressButton()
        timer.reset()
    })

}
