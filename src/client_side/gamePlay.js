import { test2, testData } from "../server_side/accessingData";
import { charactersDisplayed, highScores, level, levelImage, toggle_text } from "./each_game_required_divs/requiredDivs";
import { checkPositionWithFirebaseForGameLevel01 } from "./gamePlayLevelWise/level_01_gamePlay_control";
import { checkPositionWithFirebaseForGameLevel02 } from "./gamePlayLevelWise/level_02_gamePlay_control";
import { hideScores, movingDivsFromDisplayToShowScores } from "./gamePlayLevelWise/requiredByEachLevel";

export let gamePlay = () => {
    let worldImage = document.querySelector('.game-panel');
    worldImage.addEventListener('click', checkWhichLevelIsInPlay);
    toggle_text.addEventListener('click', toggleTextInDisplay);
    initialToogleTextDisplay();
    hideScores();
}

export let removePreviousScoresDetails = () => {
    for(let idx in highScores.rows) {
        let row = highScores.rows[idx];
        if(idx >=1) {
            row.remove();
        }
    }
}

export let showLevelHighestScores = (level, name) => {
    // removing previously placed data from DOM
    removePreviousScoresDetails();

    // re rendering table data
    // showDataInHighScoresTable(level, name);
    setTimeout(()=>showDataInHighScoresTable(level, name), 2000);
}

export let showDataInHighScoresTable = (level, name) => {
    for(let key in test2) {
        if(test2[key].level == level) {
            let row = highScores.insertRow(1);
            let nameCell = row.insertCell(0);
            let timeCell = row.insertCell(1);
            let starsCell = row.insertCell(2);
            nameCell.innerHTML = key;
            timeCell.innerHTML = (test2[key].time.toFixed(2))+' sec';
            starsCell.innerHTML = test2[key].stars;
        }
    }
}

let initialToogleTextDisplay = () => {
    toggle_text.textContent = "Hide Characters";
}

let toggleTextInDisplay = evt => {
    if(evt.target.classList.contains('show')) {
        evt.target.parentNode.style.marginLeft = '0%';
        evt.target.textContent = "Hide Characters";

        evt.target.classList.remove('show');
        charactersDisplayed.parentNode.firstChild.nextSibling.style.display = 'flex';
    } else {
        evt.target.classList.add('show');
        evt.target.textContent = "Show Characters";

        charactersDisplayed.parentNode.firstChild.nextSibling.style.display = 'none';
        evt.target.parentNode.style.marginLeft = '92%';
    }
}

let flag = 0;
export let  refreshingFlag = () => flag = 0;

export let checkAndShowResults = (level) => {
    if(levelImage.textContent) {
        movingDivsFromDisplayToShowScores(level);
        flag = 1;
    }
}

export let checkWhichLevelIsInPlay = evt => {
    let x = evt.clientX;
    let y = evt.clientY;

    let imageAltTagText = levelImage.alt;
    let levelID = imageAltTagText.split(' ')[1];
    console.log(levelID);

    if(levelID == '01') {
        checkPositionWithFirebaseForGameLevel01([x,y]);
    } else if(levelID == '02') {
        checkPositionWithFirebaseForGameLevel02([x,y]);
    }
}