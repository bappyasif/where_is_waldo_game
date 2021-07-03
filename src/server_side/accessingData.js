import { odlawsRangeOfX, odlawsRangeOfY, waldosRangeOfX, waldosRangeOfY, wizardRangeOfX, wizardRangeOfY } from "./level_01/characterPositions";

let db = firebase.firestore();

export let storeCharacterIntoFirestrore = (characterPos, whichLevel, characterName) => {
    let [x,y] = [...characterPos];
    db.collection(whichLevel).doc(characterName).set({X: x, Y: y}).then(()=>console.log(characterName+' coords details saved!!')).catch(err=>console.log("something's wrong!!"));
}

export let storeEachLevelResult = (time, name, level, stars) => {
    db
    .collection('results').doc(level)
    .collection('results').doc(name)
    .set({stars:stars, time:time})
    .then(()=> console.log('result stored!!'))
    .catch(err => console.log("error while storing result!!", err));
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
    let coordsRanges = {}
    return db.collection(collectionName).doc(docName)
    .get().then(doc => {
        coordsRanges.X = doc.data().X;
        coordsRanges.Y = doc.data().Y;
        // console.log('data loaded', doc.data(), doc.data().X, coordsRanges);
        console.log('data loaded');
        return coordsRanges;
    }).catch(err => console.log("data couldn't be loaded!!", err));
}