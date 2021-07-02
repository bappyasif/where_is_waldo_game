import { readCharacterCoordsDataFromFirebase } from "../server_side/accessingData";
import { levelImage } from "./each_game_required_divs/requiredDivs";
import { checkPositionWithFirebaseForGameLevel01 } from "./gamePlayLevelWise/level_01_gamePlay_control";

export let gamePlay = () => {
    let worldImage = document.querySelector('.game-panel');
    // worldImage.addEventListener('click', getPostionOfClick);
    worldImage.addEventListener('click', checkWhichLevelIsInPlay);
}

let checkWhichLevelIsInPlay = evt => {
    let x = evt.clientX;
    let y = evt.clientY;

    let imageAltTagText = levelImage.alt;
    let levelID = imageAltTagText.split(' ')[1];
    console.log(levelID);

    if(levelID == '01') {
        checkPositionWithFirebaseForGameLevel01([x,y])
    }
    
}

// export let coordsRanges = {};

// let checkIfItsWizard = coords => {
//     readCharacterCoordsDataFromFirebase('level_01', 'wizard').then(data=>{
//         console.log(data, "wizard data!!", coords);
//         checkIfCoordsWithinPositionRange(data, coords, 'wizard');
//     }).catch(err=>console.log("no data!!", err));
// }

// let checkIfItsWaldo = (coords) => {
//     readCharacterCoordsDataFromFirebase('level_01', 'waldo').then(data=>{
//         console.log(data, "data!!", coords);
//         checkIfCoordsWithinPositionRange(data, coords, 'waldo');
//     }).catch(err=>console.log("no data!!", err));
// }

// let checkIfCoordsWithinPositionRange = (data, coords, who) => {
//     console.log(data['X'][0], data.X[1], who);
//     if((coords[0] >= data['X'][0] && coords[0] <= data['X'][1]) && (coords[1] >= data['Y'][0] && coords[1] <= data['Y'][1])) {
//         console.log('found!!'+who, data['X'][0], data['X'][1]);
//     } else {
//         console.log('go fish!!'+who);
//     }
// }

// let checkPositionWithFirebase = (coords) => {
//     checkIfItsWaldo(coords);
//     checkIfItsWizard(coords);
//     // readCharacterCoordsDataFromFirebase('level_01', 'waldo').then(data=>{
//     //     console.log(data, "data!!", coords);
//     //     checkIfCoordsWithinPositionRange(data, coords);
//     // }).catch(err=>console.log("no data!!", err));

//     // let data = readCharacterCoordsDataFromFirebase('level_01', 'waldo');
//     // console.log(data);
//     // await readCharacterCoordsDataFromFirebase('level_01', 'waldo').then(data=>console.log(data)).catch(()=>console.log('error!!'));
//     // console.log(readCharacterCoordsDataFromFirebase('level_01', 'waldo'));
// }


// let coordsX = [], coordsY = [];
// let getPostionOfClick = (evt) => {
//     let x = evt.clientX;
//     let y = evt.clientY;

//     // coordsX.push(x);
//     // coordsY.push(y);
//     // console.log(x, y);
//     // console.log(levelImage.alt);
//     checkWhichLevelIsInPlay(evt);
//     checkPositionWithFirebase([x,y]);
// }