import { readEachLevelResult, test2, testData } from "../server_side/accessingData";
import { charactersDisplayed, highScores, level, levelImage, toggle_text } from "./each_game_required_divs/requiredDivs";
import { checkPositionWithFirebaseForGameLevel01 } from "./gamePlayLevelWise/level_01_gamePlay_control";
import { checkPositionWithFirebaseForGameLevel02 } from "./gamePlayLevelWise/level_02_gamePlay_control";
import { hideScores, movingDivsFromDisplayToShowScores } from "./gamePlayLevelWise/requiredByEachLevel";
export let results = {};
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
    // setTimeout(()=>showDataInHighScoresTable(level, name), 2000);
    setTimeout(()=>showDataOnTable(level, name), 1001);
}

export let showDataOnTable = (level, name) => {
    readEachLevelResult(level,  name).then(data=> {
        // console.log(data, 'results');
        // addingDatasOntoTable(level, data);
        bringOutMaxFourFromResults(data);
    })
}

let bringOutMaxFourFromResults = data=> {
    // let vals = Object.values(data)
    // console.log(vals);
    // let test = Object.fromEntries(
    //     Object.entries(data).sort(([,a], [,b]) => a[1].time-b[1].time )
    // );
    // console.log(test, 'sorted!!', Object.entries(data));
    // let test = Object.entries(data).sort(([a,b], [c,d]) => b.time - d.time ).slice(0,4);
    // console.log(test, 'test!!', Object.fromEntries(test))
    // console.log(test, 'test!!', Object.fromEntries(test));
    let maxFour = Object.entries(data).sort(([a,b], [c,d]) => b.time - d.time ).slice(0,4);
    let sortedFour = maxFour.sort(([,a],[,b])=>b.time-a.time);
    // console.log(test, "??")
    // addingDatasOntoTable(maxFour)
    // addingDatasOntoTable(Object.fromEntries(maxFour))
    addingDatasOntoTable(Object.fromEntries(sortedFour));
}

// let announceWhenPlayerIsInLeadingGameScorer = 

let addingDatasOntoTable = (datas) => {
    console.log('results', datas);
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

// export let showDataInHighScoresTable = (level, name) => {
//     // readEachLevelResult(level,  name);
//     for(let key in test2) {
//         if(test2[key].level == level) {
//             let row = highScores.insertRow(1);
//             let nameCell = row.insertCell(0);
//             let timeCell = row.insertCell(1);
//             let starsCell = row.insertCell(2);
//             nameCell.innerHTML = key;
//             timeCell.innerHTML = (test2[key].time.toFixed(2))+' sec';
//             starsCell.innerHTML = test2[key].stars;
//         }
//     }
// }

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