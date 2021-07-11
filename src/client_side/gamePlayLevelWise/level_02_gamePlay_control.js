import { readCharacterCoordsDataFromArray, readCharacterCoordsDataFromFirebase } from "../../server_side/accessingData";
import { adjustDropDownPosition, charactersDD, stickDropDownWhereItsClicked } from "./characterSelectionDropDown";
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

let checkWhoWithFirebase = (collectionName, characterName, coords) => {
    readCharacterCoordsDataFromFirebase(collectionName, characterName).then(data=>{
        console.log(data, 'data read!!');
        let characterData = data;
        checkIfCoordsWithinPositionRange(characterData, coords, characterName);
    }).catch(err=>console.log("could not read data!!", err));
}

export let checkPositionWithFirebaseForGameLevel02 = (coords) => {
    let dropDown = charactersDD();
    let pos = adjustDropDownPosition(coords);
    let newCoords = [pos.left, pos.top];
    // stickDropDownWhereItsClicked(dropDown, coords);
    stickDropDownWhereItsClicked(dropDown, newCoords);
    
    let select = document.querySelector('.found-who');
    if(select) {
        select.addEventListener('change', ()=>{
            let who = select.value;
            checkWhoWithFirebase('level_02', who, coords);
            document.querySelectorAll('select').forEach(node=>node.parentNode.removeChild(node));
        });
    }
}