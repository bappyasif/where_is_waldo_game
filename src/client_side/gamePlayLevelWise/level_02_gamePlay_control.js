import { readCharacterCoordsDataFromFirebase } from "../../server_side/accessingData";
import { calculateTotalTimeElapsed, decideEffeciencyFindingWaldo } from "./requiredByEachLevel";

let checkIfItsWaldo = (coords) => {
    readCharacterCoordsDataFromFirebase('level_02', 'waldo').then(data=>{
        console.log(data, "waldos data!!", coords);
        checkIfCoordsWithinPositionRange(data, coords, 'waldo');
    }).catch(err=>console.log("no data!!", err));
}

let checkIfCoordsWithinPositionRange = (data, coords, who) => {
    console.log(data['X'][0], data.X[1], who);
    if((coords[0] >= data['X'][0] && coords[0] <= data['X'][1]) && (coords[1] >= data['Y'][0] && coords[1] <= data['Y'][1])) {
        console.log('found!!'+who, data['X'][0], data['X'][1]);
        let timeSpent = calculateTotalTimeElapsed();
        decideEffeciencyFindingWaldo(timeSpent, "level_02");
    } else {
        console.log('go fish!!'+who, coords);
    }
}

export let checkPositionWithFirebaseForGameLevel02 = (coords) => {
    checkIfItsWaldo(coords);
}