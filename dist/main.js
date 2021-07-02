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


// import img from '../../../dist/images'

// let level = document.querySelector('#level');
// let timer = document.querySelector('#timer');
// let levelImage = document.querySelector('#level-image');
// let gamePanel = document.querySelector('.game-panel');

let level_one_game_view = () => {
    (0,_neededByAllLevels__WEBPACK_IMPORTED_MODULE_1__.necessaryCleanUpTasks)();

    // removingLevelAndTimer();
    renderingLevelAndTimer('01', '02-00-00');

    // removeCharactersFromDisplay();
    renderCharactersOnDisplay();

    // removingLevelWorldImage();
    renderingLevelWorldImage();
}

let renderingLevelWorldImage = () => {
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.levelImage.src = '../../../dist/images/level-1.jpg';
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.levelImage.alt = 'level 01';
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.gamePanel.appendChild(_each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.levelImage);
}

// let removingLevelWorldImage = () => {
//     levelImage.remove();
// }

let renderingLevelAndTimer = (levelNum, levelTimer) => {
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.level.textContent = levelNum;
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.timer.textContent = levelTimer;
}

// let removingLevelAndTimer = () => {
//     level.textContent = '';
//     timer.textContent = '';
// }

let renderCharactersOnDisplay = () => {
    // waldo.src = '../../../dist/images/Character.Waldo.jpg';
    // waldo.alt = 'waldo';
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

// let removeCharactersFromDisplay = () => {
//     // console.log("here@@", waldo, odlaw, wizard, wilma, wenda)
//     document.querySelectorAll('.characters-display img').forEach(node=>{
//         // console.log(node);
//         // node.src= '';
//         node.style.display = 'none';
//     });
//     // [waldo, odlaw, wizard, wilma, wenda].forEach(node => {
//     //     console.log(node)
//     // });
// }

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
        } else if(node.id == 'odlaw') {
            node.style.display = 'block';
        } else if(node.id == 'wizard') {
            node.style.display = 'block';
        } else if(node.id == 'wilma') {
            node.style.display = 'block';
        }
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
// let level = document.querySelector('#level');
// let timer = document.querySelector('#timer');
// let levelImage = document.querySelector('#level-image');
// let gamePanel = document.querySelector('.game-panel');



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
/* harmony import */ var _server_side_savingPositions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../server_side/savingPositions */ "./src/server_side/savingPositions.js");
/* harmony import */ var _all_levels_level_01__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../all_levels/level_01 */ "./src/client_side/all_levels/level_01.js");
/* harmony import */ var _all_levels_level_02__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../all_levels/level_02 */ "./src/client_side/all_levels/level_02.js");
/* harmony import */ var _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../each_game_required_divs/requiredDivs */ "./src/client_side/each_game_required_divs/requiredDivs.js");





let awaitsUserChooseLevel = () => {
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_3__.level_01.addEventListener('click',userHasSelectedLevel);
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_3__.level_02.addEventListener('click', userHasSelectedLevel);
}

let userHasSelectedLevel = evt => {
    let id = evt.target.id;
    if(id == 'level-01') {
        (0,_all_levels_level_01__WEBPACK_IMPORTED_MODULE_1__.level_one_game_view)();
        // gameplay_of_level_01();
    } else if(id == 'level-02') {
        (0,_all_levels_level_02__WEBPACK_IMPORTED_MODULE_2__.level_two_game_view)();
        // gameplay_of_level_01();
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
/* harmony export */   "level_02": () => (/* binding */ level_02)
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
/* harmony import */ var _server_side_accessingData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../server_side/accessingData */ "./src/server_side/accessingData.js");
/* harmony import */ var _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./each_game_required_divs/requiredDivs */ "./src/client_side/each_game_required_divs/requiredDivs.js");
/* harmony import */ var _gamePlayLevelWise_level_01_gamePlay_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gamePlayLevelWise/level_01_gamePlay_control */ "./src/client_side/gamePlayLevelWise/level_01_gamePlay_control.js");




let gamePlay = () => {
    let worldImage = document.querySelector('.game-panel');
    // worldImage.addEventListener('click', getPostionOfClick);
    worldImage.addEventListener('click', checkWhichLevelIsInPlay);
}

let checkWhichLevelIsInPlay = evt => {
    let x = evt.clientX;
    let y = evt.clientY;

    let imageAltTagText = _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_1__.levelImage.alt;
    let levelID = imageAltTagText.split(' ')[1];
    console.log(levelID);

    if(levelID == '01') {
        (0,_gamePlayLevelWise_level_01_gamePlay_control__WEBPACK_IMPORTED_MODULE_2__.checkPositionWithFirebaseForGameLevel01)([x,y])
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

/***/ "./src/server_side/accessingData.js":
/*!******************************************!*\
  !*** ./src/server_side/accessingData.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "waldosPosition": () => (/* binding */ waldosPosition),
/* harmony export */   "odlawsPosition": () => (/* binding */ odlawsPosition),
/* harmony export */   "wizardsPosition": () => (/* binding */ wizardsPosition),
/* harmony export */   "readCharacterCoordsDataFromFirebase": () => (/* binding */ readCharacterCoordsDataFromFirebase)
/* harmony export */ });
/* harmony import */ var _characterPositions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./characterPositions */ "./src/server_side/characterPositions.js");
// import { coordsRanges } from "../client_side/gamePlay";


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

let readCharacterCoordsDataFromFirebase = (collectionName, docName) => {
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

/***/ }),

/***/ "./src/server_side/characterPositions.js":
/*!***********************************************!*\
  !*** ./src/server_side/characterPositions.js ***!
  \***********************************************/
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
let waldosRangeOfY = [106, 132];

let wizardRangeOfX = [470, 496];
let wizardRangeOfY = [121, 153];

let odlawsRangeOfX = [203, 213];
let odlawsRangeOfY = [153, 164];



/***/ }),

/***/ "./src/server_side/savingPositions.js":
/*!********************************************!*\
  !*** ./src/server_side/savingPositions.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "coords_for_level_01": () => (/* binding */ coords_for_level_01)
/* harmony export */ });
/* harmony import */ var _accessingData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accessingData */ "./src/server_side/accessingData.js");


let coords_for_level_01 = () => {
    (0,_accessingData__WEBPACK_IMPORTED_MODULE_0__.waldosPosition)();
    (0,_accessingData__WEBPACK_IMPORTED_MODULE_0__.odlawsPosition)();
    (0,_accessingData__WEBPACK_IMPORTED_MODULE_0__.wizardsPosition)();
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
/* harmony import */ var _client_side_all_levels_level_01__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client_side/all_levels/level_01 */ "./src/client_side/all_levels/level_01.js");
/* harmony import */ var _client_side_choose_level_renderLevels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client_side/choose_level/renderLevels */ "./src/client_side/choose_level/renderLevels.js");
/* harmony import */ var _client_side_gamePlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client_side/gamePlay */ "./src/client_side/gamePlay.js");
/* harmony import */ var _server_side_accessingData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server_side/accessingData */ "./src/server_side/accessingData.js");
/* harmony import */ var _server_side_savingPositions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./server_side/savingPositions */ "./src/server_side/savingPositions.js");






(0,_client_side_gamePlay__WEBPACK_IMPORTED_MODULE_2__.gamePlay)();
(0,_server_side_savingPositions__WEBPACK_IMPORTED_MODULE_4__.coords_for_level_01)()
// level_one_game_view();
;(0,_client_side_choose_level_renderLevels__WEBPACK_IMPORTED_MODULE_1__.awaitsUserChooseLevel)();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map