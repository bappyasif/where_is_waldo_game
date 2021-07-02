// import { coordsRanges } from "../client_side/gamePlay";
import { odlawsRangeOfX, odlawsRangeOfY, waldosRangeOfX, waldosRangeOfY, wizardRangeOfX, wizardRangeOfY } from "./characterPositions";

let db = firebase.firestore();

let storeCharacterIntoFirestrore = (characterPos, whichLevel, characterName) => {
    let [x,y] = [...characterPos];
    db.collection(whichLevel).doc(characterName).set({X: x, Y: y}).then(()=>console.log(characterName+' coords details saved!!')).catch(err=>console.log("something's wrong!!"));
}

export let waldosPosition = () => {
    storeCharacterIntoFirestrore([waldosRangeOfX, waldosRangeOfY], 'level_01', 'waldo');
}

export let odlawsPosition = () => {
    storeCharacterIntoFirestrore([odlawsRangeOfX, odlawsRangeOfY], 'level_01', 'odlaw');
}

export let wizardsPosition = () => {
    storeCharacterIntoFirestrore([wizardRangeOfX, wizardRangeOfY], 'level_01', 'wizard');
}

export let readCharacterCoordsDataFromFirebase = (collectionName, docName) => {
    // let coordsRangeOfX = [], coordsRangeOfY = [];
    // let coordsRanges = [];
    let coordsRanges = {}
    return db.collection(collectionName).doc(docName)
    .get().then(doc => {
        // coordsRanges = [doc.data()];
        coordsRanges.X = doc.data().X;
        coordsRanges.Y = doc.data().Y;
        // console.log('data loaded', doc.data(), doc.data().X, coordsRanges);
        console.log('data loaded');
        return coordsRanges;
    }).catch(err => console.log("data couldn't be loaded!!", err));
    // return coordsRanges;
}