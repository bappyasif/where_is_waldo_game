import { storeEachLevelResult, storeResultsInLocally } from "../../server_side/accessingData";
import { necessaryCleanUpTasks } from "../all_levels/neededByAllLevels";
import { playAgain, resultDiv, resultText } from "../each_game_required_divs/requiredDivs";

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

let whatHappensAfterGame = (stars, time, level) => {
    let name = prompt('please enter your name for leaderboard');
    announceCompleted(stars, name);
    storeResultToFirebase(time,name,stars, level);
    awaitsUsersPlayAgain();
}

let awaitsUsersPlayAgain = () => {
    // document.querySelectorAll('select').forEach(node=>node.parentNode.removeChild(node));
    // document.querySelector('select').remove();
    // console.log(document.querySelector('select'), "??!!")
    playAgain.addEventListener('click', gettingReadyForGame);
    console.log(document.querySelector('select'), "??!!")
}

let gettingReadyForGame = evt => {
    necessaryCleanUpTasks();
    document.querySelectorAll('select').forEach(node=>node.parentNode.removeChild(node));
    resultDiv.style.display = 'none';    
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