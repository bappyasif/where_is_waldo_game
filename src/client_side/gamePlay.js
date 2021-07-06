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
    // console.log('data....', testData)
    // if(Object.keys(testData)) showLevelHighestScores();
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


// let showLevelHighestScores = () => {
//     for(let key in testData) {
//         console.log(testData, 'data here!!')
//         let trDiv = document.createElement('tr');
//         let nameEl = document.createElement('td');
//         let timeEl = document.createElement('td');
//         let starsEl = document.createElement('td');
//         nameEl.textContent = key;
//         timeEl.textContent = (testData[key].time.toFixed(2)) + 'secs';
//         timeEl.style.marginLeft = '8px';
//         timeEl.style.marginRight = '8px';
//         starsEl.textContent = testData[key].stars;
//         // liDiv.classList.add('li-items');
//         trDiv.classList.add('tr-item');
//         trDiv.append(nameEl, timeEl, starsEl);
//         highScores.append(trDiv);
//     }
// }


// let showLevelHighestScores = () => {
//     for(let key in testData) {
//         console.log(testData, 'data here!!')
//         let liDiv = document.createElement('li');
//         let nameEl = document.createElement('span');
//         let timeEl = document.createElement('span');
//         let starsEl = document.createElement('span');
//         nameEl.textContent = key;
//         timeEl.textContent = testData[key].time.toFixed(2);
//         starsEl.textContent = testData[key].stars;
//         // liDiv.classList.add('li-items');
//         liDiv.append(nameEl, timeEl, starsEl);
//         highScores.append(liDiv);
//     }
// }

let initialToogleTextDisplay = () => {
    toggle_text.classList.add('show');
    toggle_text.textContent = "Show/Hide Characters";
}

let toggleTextInDisplay = evt => {
    if(evt.target.classList.contains('show')) {
        evt.target.parentNode.style.marginLeft = '0%';
        evt.target.textContent = "Hide Characters";
        evt.target.classList.remove('show');
        // evt.target.parentNode.parentNode.firstChild.style.display = 'block';
        charactersDisplayed.parentNode.firstChild.nextSibling.style.display = 'flex';
        // console.log(charactersDisplayed.parentNode.firstChild)
    } else {
        evt.target.classList.add('show');
        evt.target.textContent = "Show Characters";
        // evt.target.parentNode.parentNode.firstChild.style.display = 'none';
        // charactersDisplayed.parentNode.firstChild.style.display = 'none'
        charactersDisplayed.parentNode.firstChild.nextSibling.style.display = 'none';
        evt.target.parentNode.style.marginLeft = '92%';
        // evt.target.parentNode.style.marginBottom = '11px';
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







// export let checkWhichLevelIsInPlay = evt => {
//     let x = evt.clientX;
//     let y = evt.clientY;

//     let imageAltTagText = levelImage.alt;
//     let levelID = imageAltTagText.split(' ')[1];
//     console.log(levelID);
    
//     let dropDown;

//     if(levelID == '01') {
//         // dropDown = charactersDD();
//         // stickDropDownWhereItsClicked(dropDown, [x,y]);
//         // let who = whichOptionWasSelected();
//         // console.log(who, "<><>")
//         // checkPositionWithFirebaseForGameLevel01([x,y], who?who:'waldo');
//         checkPositionWithFirebaseForGameLevel01([x,y])
//         // console.log(evt.pageX, evt.pageY, "here!!", evt.clientX, evt.clientY, dropDown)
        
//         // if(!document.querySelector('select').value) {
//         //     document.querySelectorAll('select').forEach(node=>node.parentNode.removeChild(node));
//         // }

//         // let who = whichOptionWasSelected();
//         // console.log(who, "who")
//         //256, 144 for wizard!!
//         // stickDropDownWhereItsClicked(dropDown, [evt.pageX, evt.pageY])
//     } else if(levelID == '02') {
//         // dropDown = charactersDD();
//         checkPositionWithFirebaseForGameLevel02([x,y]);
//     }
//     // console.log(dropDown, "checks?!", dropDown.options);
// }