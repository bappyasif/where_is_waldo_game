let db = firebase.firestore();
import { results } from "../client_side/gamePlay";
import data from "./locallyStoredCoordsData.json";

export let storeCharacterIntoFirestrore = (characterPos, whichLevel, characterName) => {
    let [x,y] = [...characterPos];
    db.collection(whichLevel).doc(characterName).set({X: x, Y: y}).then(()=>console.log(characterName+' coords details saved!!')).catch(err=>console.log("something's wrong!!", err));
}

export let storeEachLevelResult = (time, name, level, stars) => {
    db
    .collection('results').doc(level)
    .collection('results').doc(name)
    .set({stars:stars, time:time})
    .then(()=> console.log('result stored!!'))
    .catch(err => console.log("error while storing result!!", err));
}

export let readEachLevelResult = (docName, whichCharacter) => {
    let datas = {};
    return db
    .collection('results').doc(docName)
    .collection('results')
    .get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            datas[doc.id] = doc.data();
            // return doc.data(); 
        });
        // console.log(datas, "results?!")
        return datas;
    }).then(data=>{
        console.log(data, 'results');
        // results = data;
        return data;
    }).catch(err => console.log('error!!', err));
    // return datas;
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
}

export let testData = {}
export let test2 = {};
export let storeResultsInLocally = (time,name,stars, level) => {
    // testData[name] = {time, stars, level}

    // test2[level] = {[name]: {time, stars}}
    // test2[name] = {[level]: {time, stars}}
    test2[name] = {time, stars, level}
}