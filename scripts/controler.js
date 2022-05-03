import sounds from "./sounds.js"

export default function({
    buttonForest,
    buttonRain,
    buttonVoices,
    buttonFlame,
    iconForest,
    iconRain,
    iconVoices,
    iconFlame,
    minutesDisplay
}) {
    function playPauseForest() {
        buttonForest.classList.toggle("on")
        buttonRain.classList.remove("on")
        buttonVoices.classList.remove("on")
        buttonFlame.classList.remove("on")
        
        iconForest.classList.toggle("on")
        iconRain.classList.remove("on")
        iconVoices.classList.remove("on")
        iconFlame.classList.remove("on")
    }

    function playPauseRain() {
        buttonRain.classList.toggle("on")
        buttonForest.classList.remove("on")
        buttonVoices.classList.remove("on")
        buttonFlame.classList.remove("on")

        iconRain.classList.toggle("on")
        iconForest.classList.remove("on")
        iconVoices.classList.remove("on")
        iconFlame.classList.remove("on")
    }

    function playPauseVoices() {
        buttonVoices.classList.toggle("on")
        buttonRain.classList.remove("on")
        buttonForest.classList.remove("on")
        buttonFlame.classList.remove("on")

        iconVoices.classList.toggle("on")
        iconRain.classList.remove("on")
        iconForest.classList.remove("on")
        iconFlame.classList.remove("on")
    }

    function playPauseFlame() {
        buttonFlame.classList.toggle("on")
        buttonVoices.classList.remove("on")
        buttonRain.classList.remove("on")
        buttonForest.classList.remove("on")

        iconFlame.classList.toggle("on")
        iconVoices.classList.remove("on")
        iconRain.classList.remove("on")
        iconForest.classList.remove("on")
    }

    function plusMinutes() {
        let minutes = minutesDisplay.textContent
        let newMinutes = Number(minutes) + 1
        return newMinutes
    }

    function lessMinutes() {
        let minutes = minutesDisplay.textContent
        let newMinutes = Number(minutes) - 1

        if (newMinutes < 0) {
            newMinutes = 0
        }

        return newMinutes
    }
    
    return {
        playPauseForest,
        playPauseRain,
        playPauseVoices,
        playPauseFlame,
        plusMinutes,
        lessMinutes
    }

}