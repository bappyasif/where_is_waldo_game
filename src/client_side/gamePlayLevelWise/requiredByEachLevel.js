import { storeEachLevelResult, storeResultsInLocally } from "../../server_side/accessingData";
import { necessaryCleanUpTasks } from "../all_levels/neededByAllLevels";
import { chooseLevel, headerDiv, playAgain, resultDiv, resultText, scoresContainer, scoresText } from "../each_game_required_divs/requiredDivs";
import { removePreviousScoresDetails, showDataInHighScoresTable, showLevelHighestScores } from "../gamePlay";
import { howManyCharactersExist, howManyCharactersExistInLevelOne } from "./level_01_gamePlay_control";
import { howManyCharactersExistInLevelTwo } from "./level_02_gamePlay_control";

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

// let refreshLevelesCharactersCounts = () => {
//     howManyCharactersExistInLevelOne = 0;
//     howManyCharactersExistInLevelTwo = 0;
// }

export let movingDivsFromDisplayToShowScores = (level, name) => {
    showScores();
    moveLevelsAndHeaderDivsToLeft();
    // showLevelHighestScores();
    // showDataInHighScoresTable(level)
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
    // announceCompleted(stars, name);
    storeResultToFirebase(time,name,stars, level);
    // awaitsUsersPlayAgain();
    movingDivsFromDisplayToShowScores(level, name);
    // refreshLevelesCharactersCounts();
    // makingLevelsImagesUnclickable();

    setTimeout(() => {
        makingLevelsImagesUnclickable();
        announceCompleted(stars, name);
        awaitsUsersPlayAgain();
    }, 1001);
}

let awaitsUsersPlayAgain = () => {
    playAgain.addEventListener('click', gettingReadyForGame);
    // console.log(document.querySelector('select'), "??!!")
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
    // storeEachLevelResult(completionTime, name, level, stars);
    storeResultsInLocally(completionTime,name,stars, level);
}

// export let checkWho = (coords, who, level) => {
//     let characterData = readCharacterCoordsDataFromArray()[level][who];
//     checkIfCoordsWithinPositionRange(characterData, coords, who);
// }
export let disableCharacterFromDisplay = who => {
    let charactersDisplayed = document.querySelector('.characters-display').children;
    Array.from(charactersDisplayed).forEach(character => character.id == who ? character.classList.add('character-found') : false)
}

export let moveLevelsAndHeaderDivsToLeft = () => {
    headerDiv.classList.add('move-left');
    chooseLevel.classList.add('move-left');

    // headerDiv.style.alignSelf = 'flex-start';
    // chooseLevel.style.alignSelf = 'flext-start';
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