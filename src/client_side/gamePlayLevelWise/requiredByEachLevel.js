import { readCharacterCoordsDataFromFirebase, storeEachLevelResult, storeResultsInLocally } from "../../server_side/accessingData";
import { level_02_starting_time } from "../all_levels/level_02";
import { necessaryCleanUpTasks } from "../all_levels/neededByAllLevels";
import { chooseLevel, headerDiv, level_01, level_02, milliSpan, minSpan, playAgain, resultDiv, resultText, scoresContainer, secSpan, timer, toggle_text } from "../each_game_required_divs/requiredDivs";
import { removePreviousScoresDetails, showLevelHighestScores } from "../gamePlay";
import { adjustDropDownPosition, charactersDD, stickDropDownWhereItsClicked } from "./characterSelectionDropDown";

let flag;

export let calculateTotalTimeElapsed = (timeStarted) => {
    flag = false;
    let timeElapsed = Date.now() - timeStarted;
    let seconds = Math.floor(timeElapsed/1000);
    let minutes = seconds / 60;
    console.log(timeElapsed, Math.floor(timeElapsed/1000), minutes, 'times');
    flag = true;
    // timer.textContent = '00:00:00';
    return minutes;
}

export let decideEffeciencyFindingWaldo = (timeTook, level) => {
    // timer.textContent = '00:00:00';
    let stars = levelWiseScoringSystem(level, timeTook);
    whatHappensAfterGame(stars, timeTook, level);
}

let levelWiseScoringSystem = (level, timeTook) => {
    let stars;
    if(level == 'level_01') {
        if(timeTook < .50) {
            stars = '5 star';
        } else if(timeTook >= .50 && timeTook < 1) {
            stars = '4 star';
        } else if(timeTook >= 1 && timeTook < 1.25) {
            stars = '3 star';
        } else {
            stars = '2 star';
        }
    } else if(level == 'level_02') {
        if(timeTook < .22) {
            stars = '5 star';
        } else if(timeTook >= .22 && timeTook < .51) {
            stars = '4 star';
        } else if(timeTook >= .51 && timeTook < 1.12) {
            stars = '3 star';
        } else {
            stars = '2 star';
        }
    }
    return stars;
}

export let movingDivsFromDisplayToShowScores = (level, name) => {
    // emptyLevelAndTimerText();
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
        node.classList.remove('just-unclickable');
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

    setTimeout(() => {
        makingLevelsImagesUnclickable();
        announceCompleted(stars, name);
        awaitsUsersPlayAgain();
        // flag = false;
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

export let placingDropdown = (coords) => {
    let dropDown = charactersDD();
    let positionAdjusted = adjustDropDownPosition(coords);
    let newCoordsForDropdown = [positionAdjusted.left, positionAdjusted.top]
    stickDropDownWhereItsClicked(dropDown, newCoordsForDropdown);
}

export let levelCountdown = timer => {
    // time in milli seconds
    let countDownTimerDeadline = timer * 60 * 1000;
    
    let x = setInterval(() => {
        
        let timerDistance = countDownTimerDeadline - 1000;
        countDownTimerDeadline = timerDistance;

        let mins = Math.floor((timerDistance%(1000 * 60 * 60)) / (1000*60));
        let secs = Math.floor((timerDistance%(1000 * 60)) / (1000));

        displayTimerCountDown(mins, secs);

        if(flag) {
            clearInterval(x);
            flag = false;
        }
               
        if(timerDistance <= 0) {
            clearInterval(x);
        }
    }, 1000)
}

let displayTimerCountDown = (min,sec) => { 
    // if(flag) clearInterval(y);
    let currentMillis = 0;
        let y = setInterval(() => {
            currentMillis++;
            timer.textContent = min + ':'+ sec +":"+checkIfDoubleDigit();

            if(currentMillis >= 10) {
                clearInterval(y);
                timer.textContent = min + ':'+ sec +":"+'00';
                console.log('millis .....');            }
        }, 100)

        let checkIfDoubleDigit = () => {
            return currentMillis<10?'0'+currentMillis:currentMillis
        }

        if(flag) clearInterval(y);
}