// let db = firebase.firestore();
import data from "./locallyStoredCoordsData.json";

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

export let readCharacterCoordsDataFromArray = (collectionName, docName) => {
    return data;
    // console.log(data);
    // fetch(data).then(data=> console.log(data)).catch(err=>console.log('error!!', err));
}

export let testData = {}
export let storeResultsInLocally = (time,name,stars, level) => {
    testData[name] = {time, stars, level}
    console.log(testData)
    // testData[level]['results'][name] = {time, stars}
    // testData['results'][level]['results'][name] = {time, stars}
}