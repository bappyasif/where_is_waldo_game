import { readCharacterCoordsDataFromArray, readCharacterCoordsDataFromFirebase } from "../../server_side/accessingData";
import { charactersDD, stickDropDownWhereItsClicked } from "./characterSelectionDropDown";
import { calculateTotalTimeElapsed, decideEffeciencyFindingWaldo } from "./requiredByEachLevel";

let length = 3;

let checkWho = (coords, who) => {
    let characterData = readCharacterCoordsDataFromArray()['level_01'][who];
    checkIfCoordsWithinPositionRange(characterData, coords, who);
}

let checkIfCoordsWithinPositionRange = (data, coords, who) => {
    console.log(data['X'][0], data.X[1], who);
    if((coords[0] >= data['X'][0] && coords[0] <= data['X'][1]) && (coords[1] >= data['Y'][0] && coords[1] <= data['Y'][1])) {
        console.log('found!!'+who, data['X'][0], data['X'][1]);
        let timeSpent = calculateTotalTimeElapsed();
        length--;
        if(length == 0) decideEffeciencyFindingWaldo(timeSpent, 'level_01');
        // decideEffeciencyFindingWaldo(timeSpent, 'level_01');
    } else {
        console.log('go fish!!'+who, coords);
    }
    console.log(document.querySelector('select'), "??!!")
    // document.querySelectorAll('select').forEach(node=>node.parentNode.removeChild(node));
    // document.querySelector('#level-image').remove();
}

export let checkPositionWithFirebaseForGameLevel01 = (coords) => {
    let dropDown = charactersDD();
    // length = length ? length : dropDown.length;
    stickDropDownWhereItsClicked(dropDown, coords);
    let select = document.querySelector('.found-who');

    if(select) {
        select.addEventListener('change', ()=>{
            let who = select.value;
            checkWho(coords, who);
            document.querySelectorAll('select').forEach(node=>node.parentNode.removeChild(node));
        });
    }
}








/**
 * 
 * 
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

let checkIfItsOdlawVer02 = (coords) => {
    let odlawsData = readCharacterCoordsDataFromArray()['level_01']['odlaw'];
    console.log(odlawsData, "odlaws data!!", coords);
    checkIfCoordsWithinPositionRange(odlawsData, coords, 'odlaw');
}

let checkIfItsWaldoVer02 = (coords) => {
    let waldosData = readCharacterCoordsDataFromArray()['level_01']['waldo'];
    console.log(waldosData, "waldos data!!", coords);
    checkIfCoordsWithinPositionRange(waldosData, coords, 'waldo');
}

let checkIfItsWizardVer02 = (coords) => {
    let wizardsData = readCharacterCoordsDataFromArray()['level_01']['wizard'];
    console.log(wizardsData, "wizards data!!", coords);
    checkIfCoordsWithinPositionRange(wizardsData, coords, 'wizard');
}
*/


// export let checkPositionWithFirebaseForGameLevel01 = (coords) => {
//     // checkIfItsWaldo(coords);
//     // checkIfItsWizard(coords);
//     // checkIfItsOdlaw(coords);
//     // readCharacterCoordsDataFromArray();
//     // checkIfItsOdlawVer02(coords);
//     // checkIfItsWaldoVer02(coords);
//     // checkIfItsWizardVer02(coords);
//     let dropDown = charactersDD();
//     stickDropDownWhereItsClicked(dropDown, coords);
//     let select = document.querySelector('.found-who');
//     // let who = select.value;
//     // checkWho(coords, who);
//     select.addEventListener('change', ()=>{
//         let who = select.value;
//         checkWho(coords, who);
//         document.querySelectorAll('select').forEach(node=>node.parentNode.removeChild(node));
//         // if(select.value == '') {
//         //     console.log('here!!')
//         //     document.querySelectorAll('select').forEach(node=>node.parentNode.removeChild(node));
//         // }
//     });
    
//     // select.remove()
// }