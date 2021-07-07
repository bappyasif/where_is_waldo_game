import { readCharacterCoordsDataFromArray, readCharacterCoordsDataFromFirebase } from "../../server_side/accessingData";
import { charactersDD, stickDropDownWhereItsClicked } from "./characterSelectionDropDown";
import { calculateTotalTimeElapsed, decideEffeciencyFindingWaldo, disableCharacterFromDisplay } from "./requiredByEachLevel";
export let howManyCharactersExistInLevelTwo = 1;

let checkIfCoordsWithinPositionRange = (data, coords, who) => {
    console.log(data['X'][0], data.X[1], who);
    if((coords[0] >= data['X'][0] && coords[0] <= data['X'][1]) && (coords[1] >= data['Y'][0] && coords[1] <= data['Y'][1])) {
        console.log('found!!'+who, data['X'][0], data['X'][1]);
        disableCharacterFromDisplay(who);

        howManyCharactersExistInLevelTwo--;
        if(howManyCharactersExistInLevelTwo == 0) {
            let timeSpent = calculateTotalTimeElapsed();
            decideEffeciencyFindingWaldo(timeSpent, "level_02");
            // moving it back to it's initial value, so that when play again is in motion it starts from initial count
            howManyCharactersExistInLevelTwo = 1;
        }
    } else {
        console.log('go fish!!'+who, coords);
    }
}

let checkWho = (coords, who, level) => {
    let characterData = readCharacterCoordsDataFromArray()[level][who];
    checkIfCoordsWithinPositionRange(characterData, coords, who);
}

export let checkPositionWithFirebaseForGameLevel02 = (coords) => {
    let dropDown = charactersDD();
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