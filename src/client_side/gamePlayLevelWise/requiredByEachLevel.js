import { readCharacterCoordsDataFromFirebase, storeEachLevelResult, storeResultsInLocally } from "../../server_side/accessingData";
import { necessaryCleanUpTasks } from "../all_levels/neededByAllLevels";
import { chooseLevel, headerDiv, level_01, level_02, milliSpan, minSpan, playAgain, resultDiv, resultText, scoresContainer, secSpan, timer, toggle_text } from "../each_game_required_divs/requiredDivs";
import { removePreviousScoresDetails, showLevelHighestScores } from "../gamePlay";

let timeStarted = Date.now();
let flag;

export let calculateTotalTimeElapsed = () => {
    flag = false;
    let timeElapsed = Date.now() - timeStarted;
    let seconds = Math.floor(timeElapsed/1000);
    let minutes = seconds / 60;
    console.log(timeElapsed, Math.floor(timeElapsed/1000), minutes)
    flag = true;
    return minutes;
}

export let decideEffeciencyFindingWaldo = (timeTook, level) => {
    timer.textContent = '00:00:00';
    let stars;
    if(timeTook < .50) {
        stars = '5 star';
    } else if(timeTook >= .50 && timeTook < 1) {
        stars = '4 star';
    } else if(timeTook >= 1 && timeTook < 1.25) {
        stars = '3 star';
    } else {
        stars = '2 star';
    }
    whatHappensAfterGame(stars, timeTook, level);
    // flag = false;
}

export let movingDivsFromDisplayToShowScores = (level, name) => {
    emptyLevelAndTimerText();
    showScores();
    moveLevelsAndHeaderDivsToLeft();

    showLevelHighestScores(level, name);
    removePreviousScoresDetails();
}

let emptyLevelAndTimerText = () => {
    level_01.textContent = '00:00:00';
    level_02.textContent = '00:00:00';
}

let makingLevelsImagesUnclickable = () => {
    Array.from(chooseLevel.children).forEach(node=>{
        node.classList.add('unclickable');
        node.classList.remove('clickable');
    });
}

let makingLevelsImagesClickable = () => {
    Array.from(chooseLevel.children).forEach(node=>{
        node.classList.remove('unclickable');
        node.classList.add('clickable');
    });
}

let movingDivsFromDisplayToHideScores = () => {
    hideScores();
    moveLevelsAndHeaderDivsToCenter();
}

let whatHappensAfterGame = (stars, time, level) => {
    let name = prompt('please enter your name for leaderboard');

    storeResultToFirebase(time,name,stars, level);

    movingDivsFromDisplayToShowScores(level, name);

    // flag = false;
    // if(flag) {
    //     timer.textContent = '00' + ':'+ '00' +":"+'00';
    // }

    setTimeout(() => {
        makingLevelsImagesUnclickable();
        announceCompleted(stars, name);
        awaitsUsersPlayAgain();
    }, 1001);
}

let awaitsUsersPlayAgain = () => {
    playAgain.addEventListener('click', gettingReadyForGame);
}

let gettingReadyForGame = evt => {
    necessaryCleanUpTasks();
    movingDivsFromDisplayToHideScores();

    document.querySelectorAll('select').forEach(node=>node.parentNode.removeChild(node));
    resultDiv.style.display = 'none';
    makingLevelsImagesClickable();
    // timer resets well here, but to be precise need top find a better sweet spot
    // flag = false;
}

let announceCompleted = (stars, name) => {
    resultDiv.style.display = 'block';
    resultText.textContent = 'congratulations!! '+name+' you got '+stars+' :)';
}

let storeResultToFirebase = (completionTime, name, stars, level) => {
    // storeResultsInLocally(completionTime,name,stars, level);
    storeEachLevelResult(completionTime, name, level, stars);
}

export let disableCharacterFromDisplay = who => {
    let charactersDisplayed = document.querySelector('.characters-display').children;
    Array.from(charactersDisplayed).forEach(character => character.id == who ? character.classList.add('character-found') : false)
}

export let moveLevelsAndHeaderDivsToLeft = () => {
    headerDiv.classList.add('move-left');
    chooseLevel.classList.add('move-left');
}

export let moveLevelsAndHeaderDivsToCenter = () => {
    headerDiv.classList.remove('move-left');
    chooseLevel.classList.remove('move-left');
}

export let hideScores = () => {
    scoresContainer.classList.add('scores-hidden');
}

export let showScores = () => {
    scoresContainer.classList.remove('scores-hidden');
}

export let show_hideOrShowButton = () => {
    toggle_text.style.display = 'block';
}

export let levelCountdown = timer => {
    console.log(timer, 'here!!');
    // time in milli seconds
    let countDownTimerDeadline = timer * 60 * 1000;
    // console.log(timer, countDownTimerDate);
    let x = setInterval(() => {
        
        let timerDistance = countDownTimerDeadline - 1000;
        countDownTimerDeadline = timerDistance;

        let mins = Math.floor((timerDistance%(1000 * 60 * 60)) / (1000*60));
        let secs = Math.floor((timerDistance%(1000 * 60)) / (1000));
        // let millis = Math.floor((timerDistance/(1000)));
        // let millis = Math.floor(((timerDistance/1000)%(1000)));
        // let millis = Math.floor((timerDistance/(1000)));
        // console.log(mins, secs, millis);
        // displayTimerCountDown(mins, secs, millis);
        // if(flag) clearTimeout(x);
        if(flag) {
            clearTimeout(x);
            flag = false;
            countDownTimerDeadline = timer * 60 * 1000;
        }
        displayTimerCountDown(mins, secs);
        // if(flag) alert('it is');
               
        if(timerDistance <= 0) {
            clearInterval(x);
        }
    }, 1000)
}

let displayTimerCountDown = (min,sec,mil) => {
    // console.log(milliSpan)
    // timer.textContent = '';

    // console.log(min, sec, mil);
    // timer.textContent = min + ':'+ sec +":"
    let currentMillis = 0;
        let y = setInterval(() => {
            // if(flag) {
            //     clearTimeout(y);
            //     flag = false;
            // }
            currentMillis++;
            // timer.textContent += currentMillis;
            // milliSpan.textContent = currentMillis;
            // timer.textContent = min + ':'+ sec +":"+currentMillis;
            // timer.textContent = min + ':'+ sec +":"+currentMillis.length>1?currentMillis:'0'+currentMillis;
            timer.textContent = min + ':'+ sec +":"+checkIfDoubleDigit();
            // timer.textContent += checkIdDoubleDigit();
            milliSpan.textContent = "??"
            if(currentMillis >= 10) {
                clearInterval(y);
                timer.textContent = min + ':'+ sec +":"+'00';
                console.log('millis .....');            }
        }, 100)
        let checkIfDoubleDigit = () => {
            return currentMillis<10?'0'+currentMillis:currentMillis
        }
    // timer.textContent = min + ':'+ sec +":"+ mil
    // minSpan.textContent = min;
    // secSpan.textContent = sec;
    // milliSpan.textContent = mil;
    // timer.textContent = minSpan
}