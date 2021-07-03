import { odlawsRangeOfX, odlawsRangeOfY, waldosRangeOfX, waldosRangeOfY, wizardRangeOfX, wizardRangeOfY } from "./characterPositions";

let db = firebase.firestore();

let storeCharacterIntoFirestrore = (characterPos, whichLevel, characterName) => {
    let [x,y] = [...characterPos];
    db.collection(whichLevel).doc(characterName).set({X: x, Y: y}).then(()=>console.log(characterName+' coords details saved!!')).catch(err=>console.log("something's wrong!!"));
}

let waldosPosition = () => {
    storeCharacterIntoFirestrore([waldosRangeOfX, waldosRangeOfY], 'level_01', 'waldo');
}

let odlawsPosition = () => {
    storeCharacterIntoFirestrore([odlawsRangeOfX, odlawsRangeOfY], 'level_01', 'odlaw');
}

let wizardsPosition = () => {
    storeCharacterIntoFirestrore([wizardRangeOfX, wizardRangeOfY], 'level_01', 'wizard');
}

export let coords_for_level_01 = () => {
    waldosPosition();
    odlawsPosition();
    wizardsPosition();
}