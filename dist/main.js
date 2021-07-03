/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client_side/all_levels/level_01.js":
/*!************************************************!*\
  !*** ./src/client_side/all_levels/level_01.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "level_one_game_view": () => (/* binding */ level_one_game_view)
/* harmony export */ });
/* harmony import */ var _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../each_game_required_divs/requiredDivs */ "./src/client_side/each_game_required_divs/requiredDivs.js");
/* harmony import */ var _neededByAllLevels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./neededByAllLevels */ "./src/client_side/all_levels/neededByAllLevels.js");



let level_one_game_view = () => {
    (0,_neededByAllLevels__WEBPACK_IMPORTED_MODULE_1__.necessaryCleanUpTasks)();
    renderingLevelAndTimer('01', '02-00-00');
    renderCharactersOnDisplay();
    renderingLevelWorldImage();
}

let renderingLevelWorldImage = () => {
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.levelImage.src = '../../../dist/images/level-1.jpg';
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.levelImage.alt = 'level 01';
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.gamePanel.appendChild(_each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.levelImage);
}

let renderingLevelAndTimer = (levelNum, levelTimer) => {
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.level.textContent = levelNum;
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.timer.textContent = levelTimer;
}

let renderCharactersOnDisplay = () => {
    document.querySelectorAll('.characters-display img').forEach(node => {
        if(node.id == 'waldo') {
            node.style.display = 'block';
        } else if(node.id == 'odlaw') {
            node.style.display = 'block';
        } else if(node.id == 'wizard') {
            node.style.display = 'block';
        }
    })
}

/***/ }),

/***/ "./src/client_side/all_levels/level_02.js":
/*!************************************************!*\
  !*** ./src/client_side/all_levels/level_02.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "level_two_game_view": () => (/* binding */ level_two_game_view)
/* harmony export */ });
/* harmony import */ var _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../each_game_required_divs/requiredDivs */ "./src/client_side/each_game_required_divs/requiredDivs.js");
/* harmony import */ var _neededByAllLevels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./neededByAllLevels */ "./src/client_side/all_levels/neededByAllLevels.js");



let level_two_game_view = () => {
    (0,_neededByAllLevels__WEBPACK_IMPORTED_MODULE_1__.necessaryCleanUpTasks)();
    renderingLevelAndTimer('02', '01-40-00');
    renderCharactersOnDisplay();
    renderingLevelWorldImage();
}

let renderingLevelWorldImage = () => {
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.levelImage.src = '../../../dist/images/level-2.png';
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.levelImage.alt = 'level 02';
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.gamePanel.appendChild(_each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.levelImage);
}

let renderingLevelAndTimer = (levelNum, levelTimer) => {
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.level.textContent = levelNum;
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.timer.textContent = levelTimer;
}

let renderCharactersOnDisplay = () => {
    document.querySelectorAll('.characters-display img').forEach(node => {
        if(node.id == 'waldo') {
            node.style.display = 'block';
        } 
        // else if(node.id == 'odlaw') {
        //     node.style.display = 'block';
        // } else if(node.id == 'wizard') {
        //     node.style.display = 'block';
        // } else if(node.id == 'wilma') {
        //     node.style.display = 'block';
        // }
    })
}

/***/ }),

/***/ "./src/client_side/all_levels/neededByAllLevels.js":
/*!*********************************************************!*\
  !*** ./src/client_side/all_levels/neededByAllLevels.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "necessaryCleanUpTasks": () => (/* binding */ necessaryCleanUpTasks)
/* harmony export */ });
/* harmony import */ var _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../each_game_required_divs/requiredDivs */ "./src/client_side/each_game_required_divs/requiredDivs.js");


// let renderingLevelWorldImage = (src, alt) => {
//     levelImage.src = src;
//     levelImage.alt = alt;
//     gamePanel.appendChild(levelImage);
// }

let removingLevelAndTimer = () => {
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.level.textContent = '';
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.timer.textContent = '';
}

let removingLevelWorldImage = () => {
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.levelImage.remove();
}

let removeCharactersFromDisplay = () => {
    document.querySelectorAll('.characters-display img').forEach(node=> node.style.display = 'none');
}

let necessaryCleanUpTasks = () => {
    removingLevelWorldImage();
    removingLevelAndTimer();
    removeCharactersFromDisplay();
}

/***/ }),

/***/ "./src/client_side/choose_level/renderLevels.js":
/*!******************************************************!*\
  !*** ./src/client_side/choose_level/renderLevels.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "awaitsUserChooseLevel": () => (/* binding */ awaitsUserChooseLevel)
/* harmony export */ });
/* harmony import */ var _all_levels_level_01__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../all_levels/level_01 */ "./src/client_side/all_levels/level_01.js");
/* harmony import */ var _all_levels_level_02__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../all_levels/level_02 */ "./src/client_side/all_levels/level_02.js");
/* harmony import */ var _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../each_game_required_divs/requiredDivs */ "./src/client_side/each_game_required_divs/requiredDivs.js");




let awaitsUserChooseLevel = () => {
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_2__.level_01.addEventListener('click',userHasSelectedLevel);
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_2__.level_02.addEventListener('click', userHasSelectedLevel);
}

let userHasSelectedLevel = evt => {
    let id = evt.target.id;
    if(id == 'level-01') {
        (0,_all_levels_level_01__WEBPACK_IMPORTED_MODULE_0__.level_one_game_view)();
    } else if(id == 'level-02') {
        (0,_all_levels_level_02__WEBPACK_IMPORTED_MODULE_1__.level_two_game_view)();
    }
}

/***/ }),

/***/ "./src/client_side/each_game_required_divs/requiredDivs.js":
/*!*****************************************************************!*\
  !*** ./src/client_side/each_game_required_divs/requiredDivs.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "waldo": () => (/* binding */ waldo),
/* harmony export */   "odlaw": () => (/* binding */ odlaw),
/* harmony export */   "wizard": () => (/* binding */ wizard),
/* harmony export */   "wilma": () => (/* binding */ wilma),
/* harmony export */   "wenda": () => (/* binding */ wenda),
/* harmony export */   "level": () => (/* binding */ level),
/* harmony export */   "timer": () => (/* binding */ timer),
/* harmony export */   "levelImage": () => (/* binding */ levelImage),
/* harmony export */   "gamePanel": () => (/* binding */ gamePanel),
/* harmony export */   "level_01": () => (/* binding */ level_01),
/* harmony export */   "level_02": () => (/* binding */ level_02),
/* harmony export */   "resultDiv": () => (/* binding */ resultDiv),
/* harmony export */   "resultText": () => (/* binding */ resultText),
/* harmony export */   "playAgain": () => (/* binding */ playAgain)
/* harmony export */ });
let waldo = document.querySelector('#waldo');
let odlaw = document.querySelector('#odlaw');
let wizard = document.querySelector('#wizard');
let wilma = document.querySelector('#wilma');
let wenda = document.querySelector('#wenda');

let level = document.querySelector('#level');
let timer = document.querySelector('#timer');
let levelImage = document.querySelector('#level-image');
let gamePanel = document.querySelector('.game-panel');

let level_01 = document.querySelector('#level-01');
let level_02 = document.querySelector('#level-02');

let resultText = document.querySelector('.result-text');
let resultDiv = document.querySelector('.level-result');
let playAgain = document.querySelector('#play-again');



/***/ }),

/***/ "./src/client_side/gamePlay.js":
/*!*************************************!*\
  !*** ./src/client_side/gamePlay.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gamePlay": () => (/* binding */ gamePlay)
/* harmony export */ });
/* harmony import */ var _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./each_game_required_divs/requiredDivs */ "./src/client_side/each_game_required_divs/requiredDivs.js");
/* harmony import */ var _gamePlayLevelWise_level_01_gamePlay_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gamePlayLevelWise/level_01_gamePlay_control */ "./src/client_side/gamePlayLevelWise/level_01_gamePlay_control.js");
/* harmony import */ var _gamePlayLevelWise_level_02_gamePlay_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gamePlayLevelWise/level_02_gamePlay_control */ "./src/client_side/gamePlayLevelWise/level_02_gamePlay_control.js");




let gamePlay = () => {
    let worldImage = document.querySelector('.game-panel');
    worldImage.addEventListener('click', checkWhichLevelIsInPlay);
}

let checkWhichLevelIsInPlay = evt => {
    let x = evt.clientX;
    let y = evt.clientY;

    let imageAltTagText = _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.levelImage.alt;
    let levelID = imageAltTagText.split(' ')[1];
    console.log(levelID);

    if(levelID == '01') {
        (0,_gamePlayLevelWise_level_01_gamePlay_control__WEBPACK_IMPORTED_MODULE_1__.checkPositionWithFirebaseForGameLevel01)([x,y])
    } else if(levelID == '02') {
        (0,_gamePlayLevelWise_level_02_gamePlay_control__WEBPACK_IMPORTED_MODULE_2__.checkPositionWithFirebaseForGameLevel02)([x,y]);
    }
}

/***/ }),

/***/ "./src/client_side/gamePlayLevelWise/level_01_gamePlay_control.js":
/*!************************************************************************!*\
  !*** ./src/client_side/gamePlayLevelWise/level_01_gamePlay_control.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkPositionWithFirebaseForGameLevel01": () => (/* binding */ checkPositionWithFirebaseForGameLevel01)
/* harmony export */ });
/* harmony import */ var _server_side_accessingData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../server_side/accessingData */ "./src/server_side/accessingData.js");
/* harmony import */ var _requiredByEachLevel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./requiredByEachLevel */ "./src/client_side/gamePlayLevelWise/requiredByEachLevel.js");



let checkIfItsWizard = coords => {
    (0,_server_side_accessingData__WEBPACK_IMPORTED_MODULE_0__.readCharacterCoordsDataFromFirebase)('level_01', 'wizard').then(data=>{
        console.log(data, "wizard data!!", coords);
        checkIfCoordsWithinPositionRange(data, coords, 'wizard');
    }).catch(err=>console.log("no data!!", err));
}

let checkIfItsWaldo = (coords) => {
    ;(0,_server_side_accessingData__WEBPACK_IMPORTED_MODULE_0__.readCharacterCoordsDataFromFirebase)('level_01', 'waldo').then(data=>{
        console.log(data, "waldos data!!", coords);
        checkIfCoordsWithinPositionRange(data, coords, 'waldo');
    }).catch(err=>console.log("no data!!", err));
}

let checkIfItsOdlaw = (coords) => {
    ;(0,_server_side_accessingData__WEBPACK_IMPORTED_MODULE_0__.readCharacterCoordsDataFromFirebase)('level_01', 'odlaw').then(data=>{
        console.log(data, "odlaws data!!", coords);
        checkIfCoordsWithinPositionRange(data, coords, 'odlaw');
    }).catch(err=>console.log("no data!!", err));
}

let checkIfCoordsWithinPositionRange = (data, coords, who) => {
    console.log(data['X'][0], data.X[1], who);
    if((coords[0] >= data['X'][0] && coords[0] <= data['X'][1]) && (coords[1] >= data['Y'][0] && coords[1] <= data['Y'][1])) {
        console.log('found!!'+who, data['X'][0], data['X'][1]);
        let timeSpent = (0,_requiredByEachLevel__WEBPACK_IMPORTED_MODULE_1__.calculateTotalTimeElapsed)();
        (0,_requiredByEachLevel__WEBPACK_IMPORTED_MODULE_1__.decideEffeciencyFindingWaldo)(timeSpent, 'level_01');
    } else {
        console.log('go fish!!'+who, coords);
    }
}

let checkPositionWithFirebaseForGameLevel01 = (coords) => {
    checkIfItsWaldo(coords);
    checkIfItsWizard(coords);
    checkIfItsOdlaw(coords);
}

/***/ }),

/***/ "./src/client_side/gamePlayLevelWise/level_02_gamePlay_control.js":
/*!************************************************************************!*\
  !*** ./src/client_side/gamePlayLevelWise/level_02_gamePlay_control.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkPositionWithFirebaseForGameLevel02": () => (/* binding */ checkPositionWithFirebaseForGameLevel02)
/* harmony export */ });
/* harmony import */ var _server_side_accessingData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../server_side/accessingData */ "./src/server_side/accessingData.js");
/* harmony import */ var _all_levels_neededByAllLevels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../all_levels/neededByAllLevels */ "./src/client_side/all_levels/neededByAllLevels.js");
/* harmony import */ var _requiredByEachLevel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./requiredByEachLevel */ "./src/client_side/gamePlayLevelWise/requiredByEachLevel.js");




// let timeStarted = Date.now();
// let resultText = document.querySelector('.result-text');
// let resultDiv = document.querySelector('.level-result');

// let calculateTotalTimeElapsed = () => {
//     let timeElapsed = Date.now() - timeStarted;
//     let seconds = Math.floor(timeElapsed/1000);
//     let minutes = seconds / 60;
//     console.log(timeElapsed, Math.floor(timeElapsed/1000), minutes)
//     return minutes;
// }

// let decideEffeciencyFindingWaldo = (timeTook) => {
//     let stars;
//     if(timeTook < .50) {
//         stars = '5 star';
//         // console.log('5 star');
//     } else if(timeTook >= .50 && timeTook < 1) {
//         // console.log('4 star');
//         stars = '4 star';
//     } else if(timeTook >= 1 && timeTook < 1.25) {
//         // console.log('3 star');
//         stars = '3 star';
//     } else {
//         stars = '2 star';
//         // console.log('2 star');
//     }
//     whatHappensAfterGame(stars, timeTook);
// }

// let whatHappensAfterGame = (stars, time) => {
//     let name = prompt('please enter your name for leaderboard');
//     announceCompleted(stars, name);
//     storeResultToFirebase(time,name,stars);
//     awaitsUsersPlayAgain();
// }

// let awaitsUsersPlayAgain = () => {
//     let playAgain = document.querySelector('#play-again');
//     playAgain.addEventListener('click', gettingReadyForGame);
// }

// let gettingReadyForGame = evt => {
//     necessaryCleanUpTasks();
//     resultDiv.style.display = 'none';
// }

// let announceCompleted = (stars, name) => {
//     resultDiv.style.display = 'block';
//     resultText.textContent = 'congratulations!! '+name+' you got '+stars+' :)';
// }

// let storeResultToFirebase = (completionTime, name, stars) => {
//     storeEachLevelResult(completionTime, name, "level_02", stars);
// }

let checkIfItsWizard = coords => {
    (0,_server_side_accessingData__WEBPACK_IMPORTED_MODULE_0__.readCharacterCoordsDataFromFirebase)('level_02', 'wizard').then(data=>{
        console.log(data, "wizard data!!", coords);
        checkIfCoordsWithinPositionRange(data, coords, 'wizard');
    }).catch(err=>console.log("no data!!", err));
}

let checkIfItsWaldo = (coords) => {
    ;(0,_server_side_accessingData__WEBPACK_IMPORTED_MODULE_0__.readCharacterCoordsDataFromFirebase)('level_02', 'waldo').then(data=>{
        console.log(data, "waldos data!!", coords);
        checkIfCoordsWithinPositionRange(data, coords, 'waldo');
    }).catch(err=>console.log("no data!!", err));
}

let checkIfItsOdlaw = (coords) => {
    ;(0,_server_side_accessingData__WEBPACK_IMPORTED_MODULE_0__.readCharacterCoordsDataFromFirebase)('level_02', 'odlaw').then(data=>{
        console.log(data, "odlaws data!!", coords);
        checkIfCoordsWithinPositionRange(data, coords, 'odlaw');
    }).catch(err=>console.log("no data!!", err));
}

let checkIfItsWilma = (coords) => {
    ;(0,_server_side_accessingData__WEBPACK_IMPORTED_MODULE_0__.readCharacterCoordsDataFromFirebase)('level_02', 'wilma').then(data=>{
        console.log(data, "wilmas data!!", coords);
        checkIfCoordsWithinPositionRange(data, coords, 'wilma');
    }).catch(err=>console.log("no data!!", err));
}

let checkIfCoordsWithinPositionRange = (data, coords, who) => {
    console.log(data['X'][0], data.X[1], who);
    if((coords[0] >= data['X'][0] && coords[0] <= data['X'][1]) && (coords[1] >= data['Y'][0] && coords[1] <= data['Y'][1])) {
        console.log('found!!'+who, data['X'][0], data['X'][1]);
        let timeSpent = (0,_requiredByEachLevel__WEBPACK_IMPORTED_MODULE_2__.calculateTotalTimeElapsed)();
        (0,_requiredByEachLevel__WEBPACK_IMPORTED_MODULE_2__.decideEffeciencyFindingWaldo)(timeSpent, "level_02");
    } else {
        console.log('go fish!!'+who, coords);
    }
}

let checkPositionWithFirebaseForGameLevel02 = (coords) => {
    checkIfItsWaldo(coords);
    // checkIfItsWizard(coords);
    // checkIfItsOdlaw(coords);
    // checkIfItsWilma(coords);
}

/***/ }),

/***/ "./src/client_side/gamePlayLevelWise/requiredByEachLevel.js":
/*!******************************************************************!*\
  !*** ./src/client_side/gamePlayLevelWise/requiredByEachLevel.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateTotalTimeElapsed": () => (/* binding */ calculateTotalTimeElapsed),
/* harmony export */   "decideEffeciencyFindingWaldo": () => (/* binding */ decideEffeciencyFindingWaldo)
/* harmony export */ });
/* harmony import */ var _server_side_accessingData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../server_side/accessingData */ "./src/server_side/accessingData.js");
/* harmony import */ var _all_levels_neededByAllLevels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../all_levels/neededByAllLevels */ "./src/client_side/all_levels/neededByAllLevels.js");
/* harmony import */ var _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../each_game_required_divs/requiredDivs */ "./src/client_side/each_game_required_divs/requiredDivs.js");




let timeStarted = Date.now();

let calculateTotalTimeElapsed = () => {
    let timeElapsed = Date.now() - timeStarted;
    let seconds = Math.floor(timeElapsed/1000);
    let minutes = seconds / 60;
    console.log(timeElapsed, Math.floor(timeElapsed/1000), minutes)
    return minutes;
}

let decideEffeciencyFindingWaldo = (timeTook, level) => {
    let stars;
    if(timeTook < .50) {
        stars = '5 star';
    } else if(timeTook >= .50 && timeTook < 1) {
        stars = '4 star';
    } else if(timeTook >= 1 && timeTook < 1.25) {
        stars = '3 star';
    } else {
        stars = '2 star';
    }
    whatHappensAfterGame(stars, timeTook, level);
}

let whatHappensAfterGame = (stars, time, level) => {
    let name = prompt('please enter your name for leaderboard');
    announceCompleted(stars, name);
    storeResultToFirebase(time,name,stars, level);
    awaitsUsersPlayAgain();
}

let awaitsUsersPlayAgain = () => {
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_2__.playAgain.addEventListener('click', gettingReadyForGame);
}

let gettingReadyForGame = evt => {
    ;(0,_all_levels_neededByAllLevels__WEBPACK_IMPORTED_MODULE_1__.necessaryCleanUpTasks)();
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_2__.resultDiv.style.display = 'none';
}

let announceCompleted = (stars, name) => {
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_2__.resultDiv.style.display = 'block';
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_2__.resultText.textContent = 'congratulations!! '+name+' you got '+stars+' :)';
}

let storeResultToFirebase = (completionTime, name, stars, level) => {
    ;(0,_server_side_accessingData__WEBPACK_IMPORTED_MODULE_0__.storeEachLevelResult)(completionTime, name, level, stars);
}

/***/ }),

/***/ "./src/server_side/accessingData.js":
/*!******************************************!*\
  !*** ./src/server_side/accessingData.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storeCharacterIntoFirestrore": () => (/* binding */ storeCharacterIntoFirestrore),
/* harmony export */   "storeEachLevelResult": () => (/* binding */ storeEachLevelResult),
/* harmony export */   "waldosPosition": () => (/* binding */ waldosPosition),
/* harmony export */   "odlawsPosition": () => (/* binding */ odlawsPosition),
/* harmony export */   "wizardsPosition": () => (/* binding */ wizardsPosition),
/* harmony export */   "readCharacterCoordsDataFromFirebase": () => (/* binding */ readCharacterCoordsDataFromFirebase)
/* harmony export */ });
/* harmony import */ var _level_01_characterPositions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level_01/characterPositions */ "./src/server_side/level_01/characterPositions.js");


let db = firebase.firestore();

let storeCharacterIntoFirestrore = (characterPos, whichLevel, characterName) => {
    let [x,y] = [...characterPos];
    db.collection(whichLevel).doc(characterName).set({X: x, Y: y}).then(()=>console.log(characterName+' coords details saved!!')).catch(err=>console.log("something's wrong!!"));
}

let storeEachLevelResult = (time, name, level, stars) => {
    db
    .collection('results').doc(level)
    .collection('results').doc(name)
    .set({stars:stars, time:time})
    .then(()=> console.log('result stored!!'))
    .catch(err => console.log("error while storing result!!", err));
}

let waldosPosition = () => {
    storeCharacterIntoFirestrore([_level_01_characterPositions__WEBPACK_IMPORTED_MODULE_0__.waldosRangeOfX, _level_01_characterPositions__WEBPACK_IMPORTED_MODULE_0__.waldosRangeOfY], 'level_01', 'waldo');
}

let odlawsPosition = () => {
    storeCharacterIntoFirestrore([_level_01_characterPositions__WEBPACK_IMPORTED_MODULE_0__.odlawsRangeOfX, _level_01_characterPositions__WEBPACK_IMPORTED_MODULE_0__.odlawsRangeOfY], 'level_01', 'odlaw');
}

let wizardsPosition = () => {
    storeCharacterIntoFirestrore([_level_01_characterPositions__WEBPACK_IMPORTED_MODULE_0__.wizardRangeOfX, _level_01_characterPositions__WEBPACK_IMPORTED_MODULE_0__.wizardRangeOfY], 'level_01', 'wizard');
}

let readCharacterCoordsDataFromFirebase = (collectionName, docName) => {
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

/***/ }),

/***/ "./src/server_side/level_01/characterPositions.js":
/*!********************************************************!*\
  !*** ./src/server_side/level_01/characterPositions.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "waldosRangeOfX": () => (/* binding */ waldosRangeOfX),
/* harmony export */   "waldosRangeOfY": () => (/* binding */ waldosRangeOfY),
/* harmony export */   "odlawsRangeOfX": () => (/* binding */ odlawsRangeOfX),
/* harmony export */   "odlawsRangeOfY": () => (/* binding */ odlawsRangeOfY),
/* harmony export */   "wizardRangeOfX": () => (/* binding */ wizardRangeOfX),
/* harmony export */   "wizardRangeOfY": () => (/* binding */ wizardRangeOfY)
/* harmony export */ });
let waldosRangeOfX = [400, 420];
let waldosRangeOfY = [103, 132];

let wizardRangeOfX = [470, 496];
let wizardRangeOfY = [101, 132];

let odlawsRangeOfX = [203, 213];
let odlawsRangeOfY = [110, 117];



/***/ }),

/***/ "./src/server_side/level_01/storingPositions.js":
/*!******************************************************!*\
  !*** ./src/server_side/level_01/storingPositions.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "coords_for_level_01": () => (/* binding */ coords_for_level_01)
/* harmony export */ });
/* harmony import */ var _characterPositions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./characterPositions */ "./src/server_side/level_01/characterPositions.js");


let db = firebase.firestore();

let storeCharacterIntoFirestrore = (characterPos, whichLevel, characterName) => {
    let [x,y] = [...characterPos];
    db.collection(whichLevel).doc(characterName).set({X: x, Y: y}).then(()=>console.log(characterName+' coords details saved!!')).catch(err=>console.log("something's wrong!!"));
}

let waldosPosition = () => {
    storeCharacterIntoFirestrore([_characterPositions__WEBPACK_IMPORTED_MODULE_0__.waldosRangeOfX, _characterPositions__WEBPACK_IMPORTED_MODULE_0__.waldosRangeOfY], 'level_01', 'waldo');
}

let odlawsPosition = () => {
    storeCharacterIntoFirestrore([_characterPositions__WEBPACK_IMPORTED_MODULE_0__.odlawsRangeOfX, _characterPositions__WEBPACK_IMPORTED_MODULE_0__.odlawsRangeOfY], 'level_01', 'odlaw');
}

let wizardsPosition = () => {
    storeCharacterIntoFirestrore([_characterPositions__WEBPACK_IMPORTED_MODULE_0__.wizardRangeOfX, _characterPositions__WEBPACK_IMPORTED_MODULE_0__.wizardRangeOfY], 'level_01', 'wizard');
}

let coords_for_level_01 = () => {
    waldosPosition();
    odlawsPosition();
    wizardsPosition();
}

/***/ }),

/***/ "./src/server_side/level_02/characterPositions.js":
/*!********************************************************!*\
  !*** ./src/server_side/level_02/characterPositions.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "waldosRangeOfX": () => (/* binding */ waldosRangeOfX),
/* harmony export */   "waldosRangeOfY": () => (/* binding */ waldosRangeOfY),
/* harmony export */   "wizardRangeOfX": () => (/* binding */ wizardRangeOfX),
/* harmony export */   "wizardRangeOfY": () => (/* binding */ wizardRangeOfY),
/* harmony export */   "odlawsRangeOfX": () => (/* binding */ odlawsRangeOfX),
/* harmony export */   "odlawsRangeOfY": () => (/* binding */ odlawsRangeOfY),
/* harmony export */   "wilmasRangeOfX": () => (/* binding */ wilmasRangeOfX),
/* harmony export */   "wilmasRangeOfY": () => (/* binding */ wilmasRangeOfY)
/* harmony export */ });
let waldosRangeOfX = [383, 387];
let waldosRangeOfY = [33, 42];

let wizardRangeOfX = [470, 496];
let wizardRangeOfY = [101, 132];

let odlawsRangeOfX = [203, 213];
let odlawsRangeOfY = [110, 117];

let wilmasRangeOfX = [203, 213];
let wilmasRangeOfY = [110, 117];



/***/ }),

/***/ "./src/server_side/storingDataByLevels.js":
/*!************************************************!*\
  !*** ./src/server_side/storingDataByLevels.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "coords_for_level_02": () => (/* binding */ coords_for_level_02)
/* harmony export */ });
/* harmony import */ var _accessingData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accessingData */ "./src/server_side/accessingData.js");
/* harmony import */ var _level_02_characterPositions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level_02/characterPositions */ "./src/server_side/level_02/characterPositions.js");



let waldosPosition = (level) => {
    (0,_accessingData__WEBPACK_IMPORTED_MODULE_0__.storeCharacterIntoFirestrore)([_level_02_characterPositions__WEBPACK_IMPORTED_MODULE_1__.waldosRangeOfX, _level_02_characterPositions__WEBPACK_IMPORTED_MODULE_1__.waldosRangeOfY], level, 'waldo');
}

let odlawsPosition = (level) => {
    ;(0,_accessingData__WEBPACK_IMPORTED_MODULE_0__.storeCharacterIntoFirestrore)([_level_02_characterPositions__WEBPACK_IMPORTED_MODULE_1__.odlawsRangeOfX, _level_02_characterPositions__WEBPACK_IMPORTED_MODULE_1__.odlawsRangeOfY], level, 'odlaw');
}

let wizardsPosition = (level) => {
    ;(0,_accessingData__WEBPACK_IMPORTED_MODULE_0__.storeCharacterIntoFirestrore)([_level_02_characterPositions__WEBPACK_IMPORTED_MODULE_1__.wizardRangeOfX, _level_02_characterPositions__WEBPACK_IMPORTED_MODULE_1__.wizardRangeOfY], level, 'wizard');
}

let wilmasPosition = (level) => {
    ;(0,_accessingData__WEBPACK_IMPORTED_MODULE_0__.storeCharacterIntoFirestrore)([_level_02_characterPositions__WEBPACK_IMPORTED_MODULE_1__.wilmasRangeOfX, _level_02_characterPositions__WEBPACK_IMPORTED_MODULE_1__.wilmasRangeOfY], level, 'wilma');
}

let coords_for_level_02 = () => {
    waldosPosition('level_02');
    // odlawsPosition('level_02');
    // wizardsPosition('level_02');
    // wilmasPosition('level_02');
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _client_side_choose_level_renderLevels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client_side/choose_level/renderLevels */ "./src/client_side/choose_level/renderLevels.js");
/* harmony import */ var _client_side_gamePlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client_side/gamePlay */ "./src/client_side/gamePlay.js");
/* harmony import */ var _server_side_level_01_storingPositions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server_side/level_01/storingPositions */ "./src/server_side/level_01/storingPositions.js");
/* harmony import */ var _server_side_storingDataByLevels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server_side/storingDataByLevels */ "./src/server_side/storingDataByLevels.js");



// import { coords_for_level_01 } from "./server_side/savingPositions";


(0,_client_side_gamePlay__WEBPACK_IMPORTED_MODULE_1__.gamePlay)();
(0,_server_side_level_01_storingPositions__WEBPACK_IMPORTED_MODULE_2__.coords_for_level_01)();
// saving_coords_for_level02();
(0,_server_side_storingDataByLevels__WEBPACK_IMPORTED_MODULE_3__.coords_for_level_02)();
(0,_client_side_choose_level_renderLevels__WEBPACK_IMPORTED_MODULE_0__.awaitsUserChooseLevel)();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map