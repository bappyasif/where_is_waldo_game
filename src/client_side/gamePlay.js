import { testData } from "../server_side/accessingData";
import { charactersDisplayed, highScores, levelImage, toggle_text } from "./each_game_required_divs/requiredDivs";
import { charactersDD, stickDropDownWhereItsClicked, whichOptionWasSelected } from "./gamePlayLevelWise/characterSelectionDropDown";
import { checkPositionWithFirebaseForGameLevel01 } from "./gamePlayLevelWise/level_01_gamePlay_control";
import { checkPositionWithFirebaseForGameLevel02 } from "./gamePlayLevelWise/level_02_gamePlay_control";

export let gamePlay = () => {
    let worldImage = document.querySelector('.game-panel');
    worldImage.addEventListener('click', checkWhichLevelIsInPlay);
    toggle_text.addEventListener('click', toggleTextInDisplay);
    initialToogleTextDisplay();
}

let showLevelHighestScores = () => {
    for(let key in testData) {
        console.log(testData, 'data here!!')
        let row = highScores.insertRow(1);
        let nameCell = row.insertCell(0);
        let timeCell = row.insertCell(1);
        let starsCell = row.insertCell(2);
        nameCell.innerHTML = key;
        timeCell.innerHTML = (testData[key].time.toFixed(2))+'sec';
        starsCell.innerHTML = testData[key].stars;
    }
}

let initialToogleTextDisplay = () => {
    toggle_text.classList.add('show');
    toggle_text.textContent = "Show/Hide Characters";
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

export let checkWhichLevelIsInPlay = evt => {
    let x = evt.clientX;
    let y = evt.clientY;

    let imageAltTagText = levelImage.alt;
    let levelID = imageAltTagText.split(' ')[1];
    console.log(levelID);

    if(levelID == '01') {
        checkPositionWithFirebaseForGameLevel01([x,y]);
    } else if(levelID == '02') {
        // dropDown = charactersDD();
        checkPositionWithFirebaseForGameLevel02([x,y]);
    }
    // console.log('data....', testData)
    if(Object.keys(testData)) showLevelHighestScores();
}