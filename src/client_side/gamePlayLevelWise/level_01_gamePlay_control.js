import { readCharacterCoordsDataFromArray, readCharacterCoordsDataFromFirebase } from "../../server_side/accessingData";
import { adjustDropDownPosition, charactersDD, stickDropDownWhereItsClicked } from "./characterSelectionDropDown";
import { calculateTotalTimeElapsed, decideEffeciencyFindingWaldo, disableCharacterFromDisplay } from "./requiredByEachLevel";
export let howManyCharactersExistInLevelOne = 3;

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
            let timeSpent = calculateTotalTimeElapsed();
            decideEffeciencyFindingWaldo(timeSpent, 'level_01');
            // moving it back to it's initial value, so that when play again is in motion it starts from initial count
            howManyCharactersExistInLevelOne = 3;
        }
    } else {
        console.log('go fish!!'+who, coords);
    }
}

export let checkPositionWithFirebaseForGameLevel01 = (coords) => {
    let dropDown = charactersDD();
    let positionAdjusted = adjustDropDownPosition(coords);
    let newCoordsForDropdown = [positionAdjusted.left, positionAdjusted.top]
    // stickDropDownWhereItsClicked(dropDown, coords);
    stickDropDownWhereItsClicked(dropDown, newCoordsForDropdown);

    let select = document.querySelector('.found-who');

    if(select) {
        select.addEventListener('change', ()=>{
            let who = select.value;
            checkWhoWithFirebase('level_01', who, coords);
            document.querySelectorAll('select').forEach(node=>node.parentNode.removeChild(node));
        });
    }
}