import { readCharacterCoordsDataFromArray, readCharacterCoordsDataFromFirebase } from "../../server_side/accessingData";
import { saving_coords_for_level02 } from "../../server_side/level_02/storingPositions";
import { level_02_starting_time } from "../all_levels/level_02";
import { adjustDropDownPosition, charactersDD, stickDropDownWhereItsClicked } from "./characterSelectionDropDown";
import { calculateTotalTimeElapsed, decideEffeciencyFindingWaldo, disableCharacterFromDisplay } from "./requiredByEachLevel";
export let howManyCharactersExistInLevelTwo = 1;
// let level_02_starting_time =  Date.now();

let checkIfCoordsWithinPositionRange = (data, coords, who) => {
    console.log(data['X'][0], data.X[1], who);
    if((coords[0] >= data['X'][0] && coords[0] <= data['X'][1]) && (coords[1] >= data['Y'][0] && coords[1] <= data['Y'][1])) {
        console.log('found!!'+who, data['X'][0], data['X'][1]);
        // let level_02_starting_time = Date.now();
        disableCharacterFromDisplay(who);

        howManyCharactersExistInLevelTwo--;
        if(howManyCharactersExistInLevelTwo == 0) {
            // let timeSpent = calculateTotalTimeElapsed();
            let timeSpent = calculateTotalTimeElapsed(level_02_starting_time);
            decideEffeciencyFindingWaldo(timeSpent, "level_02");
            // moving it back to it's initial value, so that when play again is in motion it starts from initial count
            howManyCharactersExistInLevelTwo = 1;
        }
    } else {
        console.log('go fish!!'+who, coords);
    }
}

let checkWhoWithFirebase = (collectionName, characterName, coords) => {
    readCharacterCoordsDataFromFirebase(collectionName, characterName).then(data=>{
        console.log(data, 'data read!!');
        let characterData = data;
        let level_02_starting_time = Date.now();
        checkIfCoordsWithinPositionRange(characterData, coords, characterName);
        // checkIfCoordsWithinPositionRange(characterData, coords, characterName, level_02_starting_time);
    }).catch(err=>console.log("could not read data!!", err));
}

export let checkPositionWithFirebaseForGameLevel02 = (coords) => {
    // saving_coords_for_level02(); 

    let dropDown = charactersDD();
    let positionAdjusted = adjustDropDownPosition(coords);
    let newCoordsForDropdown = [positionAdjusted.left, positionAdjusted.top]
    // stickDropDownWhereItsClicked(dropDown, coords);
    stickDropDownWhereItsClicked(dropDown, newCoordsForDropdown);
    
    let select = document.querySelector('.found-who');
    if(select) {
        select.addEventListener('change', ()=>{
            let who = select.value;
            checkWhoWithFirebase('level_02', who, coords);
            document.querySelectorAll('select').forEach(node=>node.parentNode.removeChild(node));
        });
    }
}