import { readCharacterCoordsDataFromFirebase, storeEachLevelResult, storeResultsInLocally } from "../../server_side/accessingData";
import { necessaryCleanUpTasks } from "../all_levels/neededByAllLevels";
import { chooseLevel, headerDiv, milliSpan, minSpan, playAgain, resultDiv, resultText, scoresContainer, secSpan, timer, toggle_text } from "../each_game_required_divs/requiredDivs";
import { removePreviousScoresDetails, showLevelHighestScores } from "../gamePlay";

let timeStarted = Date.now();

export let calculateTotalTimeElapsed = () => {
    let timeElapsed = Date.now() - timeStarted;
    let seconds = Math.floor(timeElapsed/1000);
    let minutes = seconds / 60;
    console.log(timeElapsed, Math.floor(timeElapsed/1000), minutes)
    return minutes;
}

export let decideEffeciencyFindingWaldo = (timeTook, level) => {
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
}

export let movingDivsFromDisplayToShowScores = (level, name) => {
    showScores();
    moveLevelsAndHeaderDivsToLeft();

    showLevelHighestScores(level, name);
    removePreviousScoresDetails();
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
    // time in milli seconds
    let countDownTimerDeadline = timer * 60 * 1000;
    // console.log(timer, countDownTimerDate);
    let x = setInterval(() => {
        // let now = Date.now() / (1000*60*60);
        // let now = (Math.floor(Date.now() / (1000*60*60*24))%1000);
        // let timerDistance = now - countDownTimerDeadline;
        // let timerDistance = countDownTimerDeadline - now;
        let timerDistance = countDownTimerDeadline - 1000;
        countDownTimerDeadline = timerDistance;
        // console.log(timerDistance)
        // let timerDistance = now - countDownTimerDate;
        // console.log(timer, countDownTimerDate, now, timerDistance, now/(1000*60));

        let mins = Math.floor((timerDistance%(1000 * 60 * 60)) / (1000*60));
        let secs = Math.floor((timerDistance%(1000 * 60)) / (1000));
        let millis = Math.floor((timerDistance/(1000)));
        // let millis = Math.floor(((timerDistance/1000)%(1000)));
        // let millis = Math.floor((timerDistance/(1000)));
        // console.log(mins, secs, millis);
        displayTimerCountDown(mins, secs, millis);

        if(timerDistance < 0) {
            clearInterval(x);
        }
    }, 1000)
}

let displayTimerCountDown = (min,sec,mil) => {
    console.log(min, sec, mil);
    timer.textContent = min + ':'+ sec +":"+ mil
    // minSpan.textContent = min;
    // secSpan.textContent = sec;
    // milliSpan.textContent = mil;
    // timer.textContent = minSpan
}


// export let levelCountdown = timer => {
//     // let countDownTimerDate = new Date(timer);
//     // time in milli seconds
//     let countDownTimerDate = timer * 60 * 1000;
//     // console.log(timer, countDownTimerDate);
//     let x = setInterval(() => {
//         // let now = new Date().getTime();
//         // let timerDistance = countDownTimerDate - now;
//         // let now = Date.now();
//         let now = Date.now() / (1000*60);

//         let timerDistance = countDownTimerDate - now;
//         // let timerDistance = now - countDownTimerDate;
//         console.log(timer, countDownTimerDate, now, timerDistance, now/(1000*60));

//         let mins = Math.floor((timerDistance%(1000 * 60 * 60)) / (1000*60));
//         let secs = Math.floor((timerDistance%(1000 * 60)) / (1000));
//         let millis = Math.floor((timerDistance%(1000)));
//         displayTimerCountDown(mins, secs, millis);

//         if(timerDistance < 0) {
//             clearInterval(x);
//         }
//     }, 1000)
// }

// let displayTimerCountDown = (min,sec,mil) => {
//     minSpan.textContent = min;
//     secSpan.textContent = sec;
//     milliSpan.textContent = mil;
// }