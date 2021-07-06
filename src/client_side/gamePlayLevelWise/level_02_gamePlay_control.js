import { readCharacterCoordsDataFromArray, readCharacterCoordsDataFromFirebase } from "../../server_side/accessingData";
import { charactersDD, stickDropDownWhereItsClicked } from "./characterSelectionDropDown";
import { calculateTotalTimeElapsed, decideEffeciencyFindingWaldo, disableCharacterFromDisplay } from "./requiredByEachLevel";
let length = 1;

let checkIfCoordsWithinPositionRange = (data, coords, who) => {
    console.log(data['X'][0], data.X[1], who);
    if((coords[0] >= data['X'][0] && coords[0] <= data['X'][1]) && (coords[1] >= data['Y'][0] && coords[1] <= data['Y'][1])) {
        console.log('found!!'+who, data['X'][0], data['X'][1]);
        disableCharacterFromDisplay(who);

        length--;
        if(length == 0) {
            let timeSpent = calculateTotalTimeElapsed();
            decideEffeciencyFindingWaldo(timeSpent, "level_02");
        }
    } else {
        console.log('go fish!!'+who, coords);
    }
}

let checkWho = (coords, who, level) => {
    let characterData = readCharacterCoordsDataFromArray()[level][who];
    checkIfCoordsWithinPositionRange(characterData, coords, who);
}
// let disableCharacterFromDisplay = who => {
//     let charactersDisplayed = document.querySelector('.characters-display').children;
//     Array.from(charactersDisplayed).forEach(character => character.id == who ? character.classList.add('character-found') : false)
// }

export let checkPositionWithFirebaseForGameLevel02 = (coords) => {
    // checkIfItsWaldo(coords);
    // checkIfItsWaldoVer02(coords);
    let dropDown = charactersDD();
    // length = length ? length : dropDown.length;
    stickDropDownWhereItsClicked(dropDown, coords);
    let select = document.querySelector('.found-who');
    if(select) {
        select.addEventListener('change', ()=>{
            let who = select.value;
            checkWho(coords, who, 'level_02');
            document.querySelectorAll('select').forEach(node=>node.parentNode.removeChild(node));
        });
    }
}

/**
 * 
 * 
 let checkIfItsWaldo = (coords) => {
    readCharacterCoordsDataFromFirebase('level_02', 'waldo').then(data=>{
        console.log(data, "waldos data!!", coords);
        checkIfCoordsWithinPositionRange(data, coords, 'waldo');
    }).catch(err=>console.log("no data!!", err));
}

let checkIfItsWaldoVer02 = (coords) => {
    let waldosData = readCharacterCoordsDataFromArray()['level_02']['waldo'];
    console.log(waldosData, "waldos data!!", coords);
    checkIfCoordsWithinPositionRange(waldosData, coords, 'waldo');
}
 */