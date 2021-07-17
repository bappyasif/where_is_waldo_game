import { readCharacterCoordsDataFromArray, readCharacterCoordsDataFromFirebase } from "../../server_side/accessingData";
import { coords_for_level_01 } from "../../server_side/level_01/storingPositions";
import { level_01_starting_time } from "../all_levels/level_01";
import { toggleDropDownFlag } from "../gamePlay";
import { adjustDropDownPosition, charactersDD, stickDropDownWhereItsClicked } from "./characterSelectionDropDown";
import { calculateTotalTimeElapsed, decideEffeciencyFindingWaldo, disableCharacterFromDisplay } from "./requiredByEachLevel";
export let howManyCharactersExistInLevelOne = 3;
// let level_01_starting_time = Date.now();


let checkWhoWithFirebase = (collectionName, characterName, coords) => {
    readCharacterCoordsDataFromFirebase(collectionName, characterName).then(data=>{
        // console.log(data, 'data read!!');
        let characterData = data;
        checkIfCoordsWithinPositionRange(characterData, coords, characterName);
    }).catch(err=>console.log("could not read data!!", err));
}

let checkIfCoordsWithinPositionRange = (data, coords, who) => {
    console.log(data['X'][0], data.X[1], who);
    if((coords[0] >= data['X'][0] && coords[0] <= data['X'][1]) && (coords[1] >= data['Y'][0] && coords[1] <= data['Y'][1])) {
        console.log('found!!'+who, data['X'][0], data['X'][1]);
        disableCharacterFromDisplay(who)

        howManyCharactersExistInLevelOne--;
        if(howManyCharactersExistInLevelOne == 0) {
            // let timeSpent = calculateTotalTimeElapsed();
            let timeSpent = calculateTotalTimeElapsed(level_01_starting_time);
            decideEffeciencyFindingWaldo(timeSpent, 'level_01');
            // moving it back to it's initial value, so that when play again is in motion it starts from initial count
            howManyCharactersExistInLevelOne = 3;
            // level_01_starting_time = Date.now();
        }
    } else {
        console.log('go fish!!'+who, coords);
    }
}

export let checkPositionWithFirebaseForGameLevel01 = (coords) => {
    let select = document.querySelector('.found-who');

    if(select) {
        select.addEventListener('change', ()=>{
            let who = select.value;
            checkWhoWithFirebase('level_01', who, coords);
            document.querySelectorAll('select').forEach(node=>node.parentNode.removeChild(node));
            toggleDropDownFlag();
        });
    }
}