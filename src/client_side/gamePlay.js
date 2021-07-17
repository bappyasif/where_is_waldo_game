import { readEachLevelResult, test2, testData } from "../server_side/accessingData";
import { charactersDisplayed, highScores, level, levelImage, toggle_text } from "./each_game_required_divs/requiredDivs";
import { checkPositionWithFirebaseForGameLevel01 } from "./gamePlayLevelWise/level_01_gamePlay_control";
import { checkPositionWithFirebaseForGameLevel02 } from "./gamePlayLevelWise/level_02_gamePlay_control";
import { hideScores, movingDivsFromDisplayToShowScores, placingDropdown } from "./gamePlayLevelWise/requiredByEachLevel";
export let results = {}, dropdownFlag = false;
export let gamePlay = () => {
    // let worldImage = document.querySelector('.game-panel');
    // worldImage.addEventListener('click', checkWhichLevelIsInPlay);
    levelImage.addEventListener('click', checkWhichLevelIsInPlay);
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
    // setTimeout(()=>showDataInHighScoresTable(level, name), 2000);
    setTimeout(()=>showDataOnTable(level, name), 1001);
}

export let showDataOnTable = (level, name) => {
    readEachLevelResult(level,  name).then(data=> {
        bringOutMaxFourFromResults(data);
    })
}

let bringOutMaxFourFromResults = data=> {
    let maxFour = Object.entries(data).sort(([a,b], [c,d]) => b.time - d.time ).slice(0,4);
    let sortedFour = maxFour.sort(([,a],[,b])=>b.time-a.time);
    addingDatasOntoTable(Object.fromEntries(sortedFour));
}

let addingDatasOntoTable = (datas) => {
    // console.log('results', datas);
    for(let key in datas) {
        let row = highScores.insertRow(1);
        let nameCell = row.insertCell(0);
        let timeCell = row.insertCell(1);
        let starsCell = row.insertCell(2);
        nameCell.innerHTML = key;
        timeCell.innerHTML = (datas[key].time.toFixed(2))+' sec';
        starsCell.innerHTML = datas[key].stars;
    }
}

let initialToogleTextDisplay = () => {
    toggle_text.textContent = "Hide Characters";
}

let toggleTextInDisplay = evt => {
    if(evt.target.classList.contains('show')) {
        evt.target.parentNode.style.marginLeft = '-10.91%';
        evt.target.textContent = "Hide Characters";

        evt.target.classList.remove('show');
        charactersDisplayed.parentNode.firstChild.nextSibling.style.display = 'flex';
    } else {
        evt.target.classList.add('show');
        evt.target.textContent = "Show Characters";

        charactersDisplayed.parentNode.firstChild.nextSibling.style.display = 'none';
        evt.target.parentNode.style.marginLeft = '150%';
    }
}

export let toggleDropDownFlag = () => dropdownFlag = false;

export let checkWhichLevelIsInPlay = evt => {
    let x = evt.clientX;
    let y = evt.clientY;

    let imageAltTagText = levelImage.alt;
    let levelID = imageAltTagText.split(' ')[1];
    console.log(levelID);

    // placingDropdown([x,y]);
    if(!dropdownFlag) {
        placingDropdown([x,y]);
        dropdownFlag = true;
    }

    if(levelID == '01') {
        checkPositionWithFirebaseForGameLevel01([x,y]);
        // dropdownFlag = false;
    } else if(levelID == '02') {
        checkPositionWithFirebaseForGameLevel02([x,y]);
        // dropdownFlag = false;
    }
}