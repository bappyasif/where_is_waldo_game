import { readCharacterCoordsDataFromFirebase, storeEachLevelResult } from "../../server_side/accessingData";
import { necessaryCleanUpTasks } from "../all_levels/neededByAllLevels";
import { calculateTotalTimeElapsed, decideEffeciencyFindingWaldo } from "./requiredByEachLevel";

// let timeStarted = Date.now();
// let resultText = document.querySelector('.result-text');
// let resultDiv = document.querySelector('.level-result');

// let calculateTotalTimeElapsed = () => {
//     let timeElapsed = Date.now() - timeStarted;
//     let seconds = Math.floor(timeElapsed/1000);
//     let minutes = seconds / 60;
//     console.log(timeElapsed, Math.floor(timeElapsed/1000), minutes)
//     return minutes;
// }

// let decideEffeciencyFindingWaldo = (timeTook) => {
//     let stars;
//     if(timeTook < .50) {
//         stars = '5 star';
//         // console.log('5 star');
//     } else if(timeTook >= .50 && timeTook < 1) {
//         // console.log('4 star');
//         stars = '4 star';
//     } else if(timeTook >= 1 && timeTook < 1.25) {
//         // console.log('3 star');
//         stars = '3 star';
//     } else {
//         stars = '2 star';
//         // console.log('2 star');
//     }
//     whatHappensAfterGame(stars, timeTook);
// }

// let whatHappensAfterGame = (stars, time) => {
//     let name = prompt('please enter your name for leaderboard');
//     announceCompleted(stars, name);
//     storeResultToFirebase(time,name,stars);
//     awaitsUsersPlayAgain();
// }

// let awaitsUsersPlayAgain = () => {
//     let playAgain = document.querySelector('#play-again');
//     playAgain.addEventListener('click', gettingReadyForGame);
// }

// let gettingReadyForGame = evt => {
//     necessaryCleanUpTasks();
//     resultDiv.style.display = 'none';
// }

// let announceCompleted = (stars, name) => {
//     resultDiv.style.display = 'block';
//     resultText.textContent = 'congratulations!! '+name+' you got '+stars+' :)';
// }

// let storeResultToFirebase = (completionTime, name, stars) => {
//     storeEachLevelResult(completionTime, name, "level_02", stars);
// }

let checkIfItsWizard = coords => {
    readCharacterCoordsDataFromFirebase('level_02', 'wizard').then(data=>{
        console.log(data, "wizard data!!", coords);
        checkIfCoordsWithinPositionRange(data, coords, 'wizard');
    }).catch(err=>console.log("no data!!", err));
}

let checkIfItsWaldo = (coords) => {
    readCharacterCoordsDataFromFirebase('level_02', 'waldo').then(data=>{
        console.log(data, "waldos data!!", coords);
        checkIfCoordsWithinPositionRange(data, coords, 'waldo');
    }).catch(err=>console.log("no data!!", err));
}

let checkIfItsOdlaw = (coords) => {
    readCharacterCoordsDataFromFirebase('level_02', 'odlaw').then(data=>{
        console.log(data, "odlaws data!!", coords);
        checkIfCoordsWithinPositionRange(data, coords, 'odlaw');
    }).catch(err=>console.log("no data!!", err));
}

let checkIfItsWilma = (coords) => {
    readCharacterCoordsDataFromFirebase('level_02', 'wilma').then(data=>{
        console.log(data, "wilmas data!!", coords);
        checkIfCoordsWithinPositionRange(data, coords, 'wilma');
    }).catch(err=>console.log("no data!!", err));
}

let checkIfCoordsWithinPositionRange = (data, coords, who) => {
    console.log(data['X'][0], data.X[1], who);
    if((coords[0] >= data['X'][0] && coords[0] <= data['X'][1]) && (coords[1] >= data['Y'][0] && coords[1] <= data['Y'][1])) {
        console.log('found!!'+who, data['X'][0], data['X'][1]);
        let timeSpent = calculateTotalTimeElapsed();
        decideEffeciencyFindingWaldo(timeSpent, "level_02");
    } else {
        console.log('go fish!!'+who, coords);
    }
}

export let checkPositionWithFirebaseForGameLevel02 = (coords) => {
    checkIfItsWaldo(coords);
    // checkIfItsWizard(coords);
    // checkIfItsOdlaw(coords);
    // checkIfItsWilma(coords);
}