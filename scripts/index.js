import Sounds from './sounds.js'
import Timer from './timer.js'
import Events from './events.js'
import Controler from './controler.js'
import { 
    buttonPlay,
    buttonStop,
    buttonPlus,
    buttonLess,
    buttonForest,
    buttonRain,
    buttonVoices,
    buttonFlame,
    iconForest,
    iconRain,
    iconVoices,
    iconFlame,
    minutesDisplay,
    secondsDisplay
} from './elements.js'

const timer = Timer({
    buttonPlay,
    buttonStop,
    buttonPlus,
    buttonLess,
    minutesDisplay,
    secondsDisplay
})

const controler = Controler({
    buttonPlay,
    buttonStop,
    buttonPlus,
    buttonLess,
    buttonForest,
    buttonRain,
    buttonVoices,
    buttonFlame,
    iconForest,
    iconRain,
    iconVoices,
    iconFlame,
    minutesDisplay,
})

const sounds = Sounds({
    buttonPlay,
    buttonStop,
    buttonPlus,
    buttonLess,
    buttonForest,
    buttonRain,
    buttonVoices,
    buttonFlame
})

Events( {controler, timer, sounds} )

