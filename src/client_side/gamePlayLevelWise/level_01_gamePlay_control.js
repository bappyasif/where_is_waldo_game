import { readCharacterCoordsDataFromFirebase } from "../../server_side/accessingData";
import { calculateTotalTimeElapsed, decideEffeciencyFindingWaldo } from "./requiredByEachLevel";

let checkIfItsWizard = coords => {
    readCharacterCoordsDataFromFirebase('level_01', 'wizard').then(data=>{
        console.log(data, "wizard data!!", coords);
        checkIfCoordsWithinPositionRange(data, coords, 'wizard');
    }).catch(err=>console.log("no data!!", err));
}

let checkIfItsWaldo = (coords) => {
    readCharacterCoordsDataFromFirebase('level_01', 'waldo').then(data=>{
        console.log(data, "waldos data!!", coords);
        checkIfCoordsWithinPositionRange(data, coords, 'waldo');
    }).catch(err=>console.log("no data!!", err));
}

let checkIfItsOdlaw = (coords) => {
    readCharacterCoordsDataFromFirebase('level_01', 'odlaw').then(data=>{
        console.log(data, "odlaws data!!", coords);
        checkIfCoordsWithinPositionRange(data, coords, 'odlaw');
    }).catch(err=>console.log("no data!!", err));
}

let checkIfCoordsWithinPositionRange = (data, coords, who) => {
    console.log(data['X'][0], data.X[1], who);
    if((coords[0] >= data['X'][0] && coords[0] <= data['X'][1]) && (coords[1] >= data['Y'][0] && coords[1] <= data['Y'][1])) {
        console.log('found!!'+who, data['X'][0], data['X'][1]);
        let timeSpent = calculateTotalTimeElapsed();
        decideEffeciencyFindingWaldo(timeSpent, 'level_01');
    } else {
        console.log('go fish!!'+who, coords);
    }
}

export let checkPositionWithFirebaseForGameLevel01 = (coords) => {
    checkIfItsWaldo(coords);
    checkIfItsWizard(coords);
    checkIfItsOdlaw(coords);
}