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
/* harmony import */ var _server_side_level_01_storingPositions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../server_side/level_01/storingPositions */ "./src/server_side/level_01/storingPositions.js");
/* harmony import */ var _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../each_game_required_divs/requiredDivs */ "./src/client_side/each_game_required_divs/requiredDivs.js");
/* harmony import */ var _gamePlayLevelWise_requiredByEachLevel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gamePlayLevelWise/requiredByEachLevel */ "./src/client_side/gamePlayLevelWise/requiredByEachLevel.js");
/* harmony import */ var _neededByAllLevels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./neededByAllLevels */ "./src/client_side/all_levels/neededByAllLevels.js");





let level_one_game_view = () => {
    (0,_neededByAllLevels__WEBPACK_IMPORTED_MODULE_3__.necessaryCleanUpTasks)();
    renderingLevelAndTimer('01', '02-00-00');
    renderCharactersOnDisplay();
    renderingLevelWorldImage();
    (0,_gamePlayLevelWise_requiredByEachLevel__WEBPACK_IMPORTED_MODULE_2__.show_hideOrShowButton)();
    (0,_server_side_level_01_storingPositions__WEBPACK_IMPORTED_MODULE_0__.coords_for_level_01)();
}

let renderingLevelWorldImage = () => {
    // levelImage.src = '../../../dist/images/level-1.jpg' || './images/level-1.jpg';
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_1__.levelImage.src = './images/level-1.jpg';
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_1__.levelImage.alt = 'level 01';
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_1__.gamePanel.appendChild(_each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_1__.levelImage);
}

let renderingLevelAndTimer = (levelNum, levelTimer) => {
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_1__.level.textContent = levelNum;
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_1__.timer.textContent = levelTimer;
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
/* harmony import */ var _server_side_level_02_storingPositions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../server_side/level_02/storingPositions */ "./src/server_side/level_02/storingPositions.js");
/* harmony import */ var _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../each_game_required_divs/requiredDivs */ "./src/client_side/each_game_required_divs/requiredDivs.js");
/* harmony import */ var _gamePlayLevelWise_requiredByEachLevel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gamePlayLevelWise/requiredByEachLevel */ "./src/client_side/gamePlayLevelWise/requiredByEachLevel.js");
/* harmony import */ var _neededByAllLevels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./neededByAllLevels */ "./src/client_side/all_levels/neededByAllLevels.js");





let level_two_game_view = () => {
    (0,_neededByAllLevels__WEBPACK_IMPORTED_MODULE_3__.necessaryCleanUpTasks)();
    renderingLevelAndTimer('02', '01-40-00');
    renderCharactersOnDisplay();
    renderingLevelWorldImage();
    (0,_gamePlayLevelWise_requiredByEachLevel__WEBPACK_IMPORTED_MODULE_2__.show_hideOrShowButton)();
    (0,_server_side_level_02_storingPositions__WEBPACK_IMPORTED_MODULE_0__.saving_coords_for_level02)();
}

let renderingLevelWorldImage = () => {
    // levelImage.src = '../../../dist/images/level-2.png' || './images/level-2.png';
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_1__.levelImage.src = './images/level-2.png';
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_1__.levelImage.alt = 'level 02';
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_1__.gamePanel.appendChild(_each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_1__.levelImage);
}

let renderingLevelAndTimer = (levelNum, levelTimer) => {
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_1__.level.textContent = levelNum;
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_1__.timer.textContent = levelTimer;
}

let renderCharactersOnDisplay = () => {
    document.querySelectorAll('.characters-display img').forEach(node => {
        if(node.id == 'waldo') {
            node.style.display = 'block';
        }
    });
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

let removeOpacityFreomCharcters = () => {
    document.querySelectorAll('.characters-display img').forEach(node=> node.classList.remove('character-found'));
    // document.querySelectorAll('.characters-display img').forEach(node=> node.classList.contains('character-found') ? node.classList.remove('character-found') : false);
}

let hide_showOrHideButton = () => {
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.toggle_text.style.display = 'none';
}

let necessaryCleanUpTasks = () => {
    removingLevelWorldImage();
    removingLevelAndTimer();
    removeCharactersFromDisplay();
    removeOpacityFreomCharcters();
    hide_showOrHideButton();
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
/* harmony import */ var _server_side_level_01_storingPositions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../server_side/level_01/storingPositions */ "./src/server_side/level_01/storingPositions.js");
/* harmony import */ var _server_side_level_02_storingPositions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../server_side/level_02/storingPositions */ "./src/server_side/level_02/storingPositions.js");
/* harmony import */ var _all_levels_level_01__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../all_levels/level_01 */ "./src/client_side/all_levels/level_01.js");
/* harmony import */ var _all_levels_level_02__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../all_levels/level_02 */ "./src/client_side/all_levels/level_02.js");
/* harmony import */ var _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../each_game_required_divs/requiredDivs */ "./src/client_side/each_game_required_divs/requiredDivs.js");






let awaitsUserChooseLevel = () => {
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_4__.level_01.addEventListener('click',userHasSelectedLevel);
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_4__.level_02.addEventListener('click', userHasSelectedLevel);
}

let userHasSelectedLevel = evt => {
    let id = evt.target.id;
    if(id == 'level-01') {
        (0,_all_levels_level_01__WEBPACK_IMPORTED_MODULE_2__.level_one_game_view)();
        // coords_for_level_01();
    } else if(id == 'level-02') {
        (0,_all_levels_level_02__WEBPACK_IMPORTED_MODULE_3__.level_two_game_view)();
        // saving_coords_for_level02();
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
/* harmony export */   "playAgain": () => (/* binding */ playAgain),
/* harmony export */   "toggle_text": () => (/* binding */ toggle_text),
/* harmony export */   "charactersDisplayed": () => (/* binding */ charactersDisplayed),
/* harmony export */   "highScores": () => (/* binding */ highScores),
/* harmony export */   "chooseLevel": () => (/* binding */ chooseLevel),
/* harmony export */   "headerDiv": () => (/* binding */ headerDiv),
/* harmony export */   "scoresContainer": () => (/* binding */ scoresContainer),
/* harmony export */   "scoresText": () => (/* binding */ scoresText)
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
let toggle_text = document.querySelector('#toggle-text');
let charactersDisplayed = document.querySelector('.characters-display');
let highScores = document.querySelector('.high-scores');

let chooseLevel = document.querySelector('.choose-levels');
let headerDiv = document.querySelector('.levels-header');
let scoresContainer = document.querySelector('.keeping-scores');
let scoresText = document.querySelector('.scores');


/***/ }),

/***/ "./src/client_side/gamePlay.js":
/*!*************************************!*\
  !*** ./src/client_side/gamePlay.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "results": () => (/* binding */ results),
/* harmony export */   "gamePlay": () => (/* binding */ gamePlay),
/* harmony export */   "removePreviousScoresDetails": () => (/* binding */ removePreviousScoresDetails),
/* harmony export */   "showLevelHighestScores": () => (/* binding */ showLevelHighestScores),
/* harmony export */   "showDataOnTable": () => (/* binding */ showDataOnTable),
/* harmony export */   "checkWhichLevelIsInPlay": () => (/* binding */ checkWhichLevelIsInPlay)
/* harmony export */ });
/* harmony import */ var _server_side_accessingData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../server_side/accessingData */ "./src/server_side/accessingData.js");
/* harmony import */ var _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./each_game_required_divs/requiredDivs */ "./src/client_side/each_game_required_divs/requiredDivs.js");
/* harmony import */ var _gamePlayLevelWise_level_01_gamePlay_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gamePlayLevelWise/level_01_gamePlay_control */ "./src/client_side/gamePlayLevelWise/level_01_gamePlay_control.js");
/* harmony import */ var _gamePlayLevelWise_level_02_gamePlay_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gamePlayLevelWise/level_02_gamePlay_control */ "./src/client_side/gamePlayLevelWise/level_02_gamePlay_control.js");
/* harmony import */ var _gamePlayLevelWise_requiredByEachLevel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gamePlayLevelWise/requiredByEachLevel */ "./src/client_side/gamePlayLevelWise/requiredByEachLevel.js");





let results = {};
let gamePlay = () => {
    // let worldImage = document.querySelector('.game-panel');
    // worldImage.addEventListener('click', checkWhichLevelIsInPlay);
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_1__.levelImage.addEventListener('click', checkWhichLevelIsInPlay);
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_1__.toggle_text.addEventListener('click', toggleTextInDisplay);
    initialToogleTextDisplay();
    (0,_gamePlayLevelWise_requiredByEachLevel__WEBPACK_IMPORTED_MODULE_4__.hideScores)();
}

let removePreviousScoresDetails = () => {
    for(let idx in _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_1__.highScores.rows) {
        let row = _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_1__.highScores.rows[idx];
        if(idx >=1) {
            row.remove();
        }
    }
}

let showLevelHighestScores = (level, name) => {
    // removing previously placed data from DOM
    removePreviousScoresDetails();

    // re rendering table data
    // setTimeout(()=>showDataInHighScoresTable(level, name), 2000);
    setTimeout(()=>showDataOnTable(level, name), 1001);
}

let showDataOnTable = (level, name) => {
    ;(0,_server_side_accessingData__WEBPACK_IMPORTED_MODULE_0__.readEachLevelResult)(level,  name).then(data=> {
        bringOutMaxFourFromResults(data);
    })
}

let bringOutMaxFourFromResults = data=> {
    let maxFour = Object.entries(data).sort(([a,b], [c,d]) => b.time - d.time ).slice(0,4);
    let sortedFour = maxFour.sort(([,a],[,b])=>b.time-a.time);
    addingDatasOntoTable(Object.fromEntries(sortedFour));
}

let addingDatasOntoTable = (datas) => {
    // console.log('results', datas);
    for(let key in datas) {
        let row = _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_1__.highScores.insertRow(1);
        let nameCell = row.insertCell(0);
        let timeCell = row.insertCell(1);
        let starsCell = row.insertCell(2);
        nameCell.innerHTML = key;
        timeCell.innerHTML = (datas[key].time.toFixed(2))+' sec';
        starsCell.innerHTML = datas[key].stars;
    }
}

let initialToogleTextDisplay = () => {
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_1__.toggle_text.textContent = "Hide Characters";
}

let toggleTextInDisplay = evt => {
    if(evt.target.classList.contains('show')) {
        evt.target.parentNode.style.marginLeft = '-10.91%';
        evt.target.textContent = "Hide Characters";

        evt.target.classList.remove('show');
        _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_1__.charactersDisplayed.parentNode.firstChild.nextSibling.style.display = 'flex';
    } else {
        evt.target.classList.add('show');
        evt.target.textContent = "Show Characters";

        _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_1__.charactersDisplayed.parentNode.firstChild.nextSibling.style.display = 'none';
        evt.target.parentNode.style.marginLeft = '150%';
    }
}

let checkWhichLevelIsInPlay = evt => {
    let x = evt.clientX;
    let y = evt.clientY;

    let imageAltTagText = _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_1__.levelImage.alt;
    let levelID = imageAltTagText.split(' ')[1];
    console.log(levelID);

    if(levelID == '01') {
        (0,_gamePlayLevelWise_level_01_gamePlay_control__WEBPACK_IMPORTED_MODULE_2__.checkPositionWithFirebaseForGameLevel01)([x,y]);
    } else if(levelID == '02') {
        (0,_gamePlayLevelWise_level_02_gamePlay_control__WEBPACK_IMPORTED_MODULE_3__.checkPositionWithFirebaseForGameLevel02)([x,y]);
    }
}

/***/ }),

/***/ "./src/client_side/gamePlayLevelWise/characterSelectionDropDown.js":
/*!*************************************************************************!*\
  !*** ./src/client_side/gamePlayLevelWise/characterSelectionDropDown.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "charactersDD": () => (/* binding */ charactersDD),
/* harmony export */   "adjustDropDownPosition": () => (/* binding */ adjustDropDownPosition),
/* harmony export */   "tryingCoordsWithRectVer02": () => (/* binding */ tryingCoordsWithRectVer02),
/* harmony export */   "stickDropDownWhereItsClicked": () => (/* binding */ stickDropDownWhereItsClicked),
/* harmony export */   "whichOptionWasSelected": () => (/* binding */ whichOptionWasSelected)
/* harmony export */ });
/* harmony import */ var _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../each_game_required_divs/requiredDivs */ "./src/client_side/each_game_required_divs/requiredDivs.js");


let value = '';
let  charactersDD = () => {
    let dropDownMarkUp = document.createElement('select');
    let option = document.createElement('option');
    option.value=null;
    option.text='choose';
    dropDownMarkUp.append(option);
    let charactersAreInDisplay = document.querySelector('.characters-display').children;
    Array.from(charactersAreInDisplay).forEach(character => {
        let option = document.createElement('option');
        // console.log(character)
        if(character.style.display != 'none') {
            option.value = character.alt;
            option.textContent = character.alt;
            dropDownMarkUp.append(option);
        }
    });
    dropDownMarkUp.classList.add('found-who')
    return dropDownMarkUp;
}

let adjustDropDownPosition = coords => {
    let elemRect = _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.levelImage.getBoundingClientRect();
    let left = elemRect.left;
    let top = elemRect.top;
    // let height = levelImage.height;
    // let width = levelImage.width;
    // let yCoord = (top+(height*36)/100).toFixed(2);
    // let xCoord = (left+(width*49)/100).toFixed(2);
    // console.log(yCoord, '??', (top+(height*37.8)/100).toFixed(2));
    // console.log(xCoord, "!!", (left+(width*50.19)/100).toFixed(2) )
    // console.log(elemRect.x, elemRect.y, elemRect.height, elemRect.width, levelImage.height, elemRect.height+((levelImage.height*20)/100) );
    // console.log(window.scrollX, window.scrollY)
    // console.log(((elemRect.height*20)/100)+elemRect.height, elemRect.height)

    tryingCoords();
    tryingCoordsWithRect();

    return {
        left: coords[0]-left,
        top: coords[1]-top
    }
}

let tryingCoordsWithRect = () => {
    let elemRect = _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.levelImage.getBoundingClientRect();
    let left = elemRect.left;
    let top = elemRect.top;
    let height = _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.levelImage.height;
    let width = _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.levelImage.width;
    let yCoord = (top+(height*36)/100).toFixed(2);
    let xCoord = (left+(width*49)/100).toFixed(2);
    console.log('l', left, 't', top, 'w', width, 'h', height)
    console.log(yCoord, '??', (top+(height*37.8)/100).toFixed(2));
    console.log(xCoord, "!!", (left+(width*50.19)/100).toFixed(2));
    
}

let tryingCoordsWithRectVer02 = () => {
    let elemRect = _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.levelImage.getBoundingClientRect();
    let left = elemRect.left;
    // let top = elemRect.top;
    // let top = window.scrollY;
    let top = elemRect.y;
    let height = _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.levelImage.height;
    let width = _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.levelImage.width;
    let yCoord = (top+(height*36)/100).toFixed(2);
    let ycEnd = (top+(height*37.8)/100).toFixed(2);
    let xCoord = (left+(width*49)/100).toFixed(2);
    let xcEnd = (left+(width*50.19)/100).toFixed(2);
    console.log('l', left, 't', top, 'w', width, 'h', height)
    console.log(yCoord, '??', (top+(height*37.8)/100).toFixed(2));
    console.log(xCoord, "!!", (left+(width*50.19)/100).toFixed(2));
    return [xCoord, xcEnd, yCoord, ycEnd]
}

let tryingCoords = () => {
    let left = window.scrollX;
    let top = window.scrollY;
    let height = _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.levelImage.height;
    let width = _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.levelImage.width;
    console.log('l', left, 't', top, 'w', width, 'h', height)
    let yCoord = (top+(height*24.2)/100).toFixed(2);
    let xCoord = (left+(width*67.2)/100).toFixed(2);
    console.log(yCoord, '??', (top+(height*25.8)/100).toFixed(2));
    console.log(xCoord, "!!", (left+(width*68)/100).toFixed(2) )
}

let stickDropDownWhereItsClicked = (dropDown, coords) => {
    dropDown.setAttribute('style', 'color: green');
    dropDown.style.left = coords[0]+'px';
    dropDown.style.top = coords[1]+'px';
    dropDown.style.position = 'absolute';
    if(dropDown.length > 1) document.querySelector('.game-panel').append(dropDown);
}

let whichOptionWasSelected = () => {
    let select = document.querySelector('.found-who');
    select.addEventListener('change', (evt)=> {
        value = select.value;
        select.remove();
        return value;
    });
}

/***/ }),

/***/ "./src/client_side/gamePlayLevelWise/level_01_gamePlay_control.js":
/*!************************************************************************!*\
  !*** ./src/client_side/gamePlayLevelWise/level_01_gamePlay_control.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "howManyCharactersExistInLevelOne": () => (/* binding */ howManyCharactersExistInLevelOne),
/* harmony export */   "checkPositionWithFirebaseForGameLevel01": () => (/* binding */ checkPositionWithFirebaseForGameLevel01)
/* harmony export */ });
/* harmony import */ var _server_side_accessingData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../server_side/accessingData */ "./src/server_side/accessingData.js");
/* harmony import */ var _server_side_level_01_storingPositions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../server_side/level_01/storingPositions */ "./src/server_side/level_01/storingPositions.js");
/* harmony import */ var _characterSelectionDropDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./characterSelectionDropDown */ "./src/client_side/gamePlayLevelWise/characterSelectionDropDown.js");
/* harmony import */ var _requiredByEachLevel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./requiredByEachLevel */ "./src/client_side/gamePlayLevelWise/requiredByEachLevel.js");




let howManyCharactersExistInLevelOne = 3;

let checkWhoWithFirebase = (collectionName, characterName, coords) => {
    (0,_server_side_accessingData__WEBPACK_IMPORTED_MODULE_0__.readCharacterCoordsDataFromFirebase)(collectionName, characterName).then(data=>{
        // console.log(data, 'data read!!');
        let characterData = data;
        checkIfCoordsWithinPositionRange(characterData, coords, characterName);
    }).catch(err=>console.log("could not read data!!", err));
}

let checkIfCoordsWithinPositionRange = (data, coords, who) => {
    console.log(data['X'][0], data.X[1], who);
    if((coords[0] >= data['X'][0] && coords[0] <= data['X'][1]) && (coords[1] >= data['Y'][0] && coords[1] <= data['Y'][1])) {
        console.log('found!!'+who, data['X'][0], data['X'][1]);
        (0,_requiredByEachLevel__WEBPACK_IMPORTED_MODULE_3__.disableCharacterFromDisplay)(who)

        howManyCharactersExistInLevelOne--;
        if(howManyCharactersExistInLevelOne == 0) {
            let timeSpent = (0,_requiredByEachLevel__WEBPACK_IMPORTED_MODULE_3__.calculateTotalTimeElapsed)();
            (0,_requiredByEachLevel__WEBPACK_IMPORTED_MODULE_3__.decideEffeciencyFindingWaldo)(timeSpent, 'level_01');
            // moving it back to it's initial value, so that when play again is in motion it starts from initial count
            howManyCharactersExistInLevelOne = 3;
        }
    } else {
        console.log('go fish!!'+who, coords);
    }
}

let checkPositionWithFirebaseForGameLevel01 = (coords) => {
    // coords_for_level_01();

    let dropDown = (0,_characterSelectionDropDown__WEBPACK_IMPORTED_MODULE_2__.charactersDD)();
    let positionAdjusted = (0,_characterSelectionDropDown__WEBPACK_IMPORTED_MODULE_2__.adjustDropDownPosition)(coords);
    let newCoordsForDropdown = [positionAdjusted.left, positionAdjusted.top]
    // stickDropDownWhereItsClicked(dropDown, coords);
    ;(0,_characterSelectionDropDown__WEBPACK_IMPORTED_MODULE_2__.stickDropDownWhereItsClicked)(dropDown, newCoordsForDropdown);

    let select = document.querySelector('.found-who');

    if(select) {
        select.addEventListener('change', ()=>{
            let who = select.value;
            checkWhoWithFirebase('level_01', who, coords);
            document.querySelectorAll('select').forEach(node=>node.parentNode.removeChild(node));
        });
    }
}

/***/ }),

/***/ "./src/client_side/gamePlayLevelWise/level_02_gamePlay_control.js":
/*!************************************************************************!*\
  !*** ./src/client_side/gamePlayLevelWise/level_02_gamePlay_control.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "howManyCharactersExistInLevelTwo": () => (/* binding */ howManyCharactersExistInLevelTwo),
/* harmony export */   "checkPositionWithFirebaseForGameLevel02": () => (/* binding */ checkPositionWithFirebaseForGameLevel02)
/* harmony export */ });
/* harmony import */ var _server_side_accessingData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../server_side/accessingData */ "./src/server_side/accessingData.js");
/* harmony import */ var _server_side_level_02_storingPositions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../server_side/level_02/storingPositions */ "./src/server_side/level_02/storingPositions.js");
/* harmony import */ var _characterSelectionDropDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./characterSelectionDropDown */ "./src/client_side/gamePlayLevelWise/characterSelectionDropDown.js");
/* harmony import */ var _requiredByEachLevel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./requiredByEachLevel */ "./src/client_side/gamePlayLevelWise/requiredByEachLevel.js");




let howManyCharactersExistInLevelTwo = 1;

let checkIfCoordsWithinPositionRange = (data, coords, who) => {
    console.log(data['X'][0], data.X[1], who);
    if((coords[0] >= data['X'][0] && coords[0] <= data['X'][1]) && (coords[1] >= data['Y'][0] && coords[1] <= data['Y'][1])) {
        console.log('found!!'+who, data['X'][0], data['X'][1]);
        (0,_requiredByEachLevel__WEBPACK_IMPORTED_MODULE_3__.disableCharacterFromDisplay)(who);

        howManyCharactersExistInLevelTwo--;
        if(howManyCharactersExistInLevelTwo == 0) {
            let timeSpent = (0,_requiredByEachLevel__WEBPACK_IMPORTED_MODULE_3__.calculateTotalTimeElapsed)();
            (0,_requiredByEachLevel__WEBPACK_IMPORTED_MODULE_3__.decideEffeciencyFindingWaldo)(timeSpent, "level_02");
            // moving it back to it's initial value, so that when play again is in motion it starts from initial count
            howManyCharactersExistInLevelTwo = 1;
        }
    } else {
        console.log('go fish!!'+who, coords);
    }
}

let checkWhoWithFirebase = (collectionName, characterName, coords) => {
    ;(0,_server_side_accessingData__WEBPACK_IMPORTED_MODULE_0__.readCharacterCoordsDataFromFirebase)(collectionName, characterName).then(data=>{
        console.log(data, 'data read!!');
        let characterData = data;
        checkIfCoordsWithinPositionRange(characterData, coords, characterName);
    }).catch(err=>console.log("could not read data!!", err));
}

let checkPositionWithFirebaseForGameLevel02 = (coords) => {
    // saving_coords_for_level02(); 

    let dropDown = (0,_characterSelectionDropDown__WEBPACK_IMPORTED_MODULE_2__.charactersDD)();
    let positionAdjusted = (0,_characterSelectionDropDown__WEBPACK_IMPORTED_MODULE_2__.adjustDropDownPosition)(coords);
    let newCoordsForDropdown = [positionAdjusted.left, positionAdjusted.top]
    // stickDropDownWhereItsClicked(dropDown, coords);
    ;(0,_characterSelectionDropDown__WEBPACK_IMPORTED_MODULE_2__.stickDropDownWhereItsClicked)(dropDown, newCoordsForDropdown);
    
    let select = document.querySelector('.found-who');
    if(select) {
        select.addEventListener('change', ()=>{
            let who = select.value;
            checkWhoWithFirebase('level_02', who, coords);
            document.querySelectorAll('select').forEach(node=>node.parentNode.removeChild(node));
        });
    }
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
/* harmony export */   "decideEffeciencyFindingWaldo": () => (/* binding */ decideEffeciencyFindingWaldo),
/* harmony export */   "movingDivsFromDisplayToShowScores": () => (/* binding */ movingDivsFromDisplayToShowScores),
/* harmony export */   "disableCharacterFromDisplay": () => (/* binding */ disableCharacterFromDisplay),
/* harmony export */   "moveLevelsAndHeaderDivsToLeft": () => (/* binding */ moveLevelsAndHeaderDivsToLeft),
/* harmony export */   "moveLevelsAndHeaderDivsToCenter": () => (/* binding */ moveLevelsAndHeaderDivsToCenter),
/* harmony export */   "hideScores": () => (/* binding */ hideScores),
/* harmony export */   "showScores": () => (/* binding */ showScores),
/* harmony export */   "show_hideOrShowButton": () => (/* binding */ show_hideOrShowButton)
/* harmony export */ });
/* harmony import */ var _server_side_accessingData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../server_side/accessingData */ "./src/server_side/accessingData.js");
/* harmony import */ var _all_levels_neededByAllLevels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../all_levels/neededByAllLevels */ "./src/client_side/all_levels/neededByAllLevels.js");
/* harmony import */ var _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../each_game_required_divs/requiredDivs */ "./src/client_side/each_game_required_divs/requiredDivs.js");
/* harmony import */ var _gamePlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gamePlay */ "./src/client_side/gamePlay.js");





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

let movingDivsFromDisplayToShowScores = (level, name) => {
    showScores();
    moveLevelsAndHeaderDivsToLeft();

    (0,_gamePlay__WEBPACK_IMPORTED_MODULE_3__.showLevelHighestScores)(level, name);
    (0,_gamePlay__WEBPACK_IMPORTED_MODULE_3__.removePreviousScoresDetails)();
}

let makingLevelsImagesUnclickable = () => {
    Array.from(_each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_2__.chooseLevel.children).forEach(node=>{
        node.classList.add('unclickable');
        node.classList.remove('clickable');
    });
}

let makingLevelsImagesClickable = () => {
    Array.from(_each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_2__.chooseLevel.children).forEach(node=>{
        node.classList.remove('unclickable');
        node.classList.add('clickable');
    });
}

let movingDivsFromDisplayToHideScores = () => {
    hideScores();
    moveLevelsAndHeaderDivsToCenter();
}

let whatHappensAfterGame = (stars, time, level) => {
    let name = prompt('please enter your name for leaderboard');

    storeResultToFirebase(time,name,stars, level);

    movingDivsFromDisplayToShowScores(level, name);

    setTimeout(() => {
        makingLevelsImagesUnclickable();
        announceCompleted(stars, name);
        awaitsUsersPlayAgain();
    }, 1001);
}

let awaitsUsersPlayAgain = () => {
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_2__.playAgain.addEventListener('click', gettingReadyForGame);
}

let gettingReadyForGame = evt => {
    ;(0,_all_levels_neededByAllLevels__WEBPACK_IMPORTED_MODULE_1__.necessaryCleanUpTasks)();
    movingDivsFromDisplayToHideScores();

    document.querySelectorAll('select').forEach(node=>node.parentNode.removeChild(node));
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_2__.resultDiv.style.display = 'none';
    makingLevelsImagesClickable();
}

let announceCompleted = (stars, name) => {
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_2__.resultDiv.style.display = 'block';
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_2__.resultText.textContent = 'congratulations!! '+name+' you got '+stars+' :)';
}

let storeResultToFirebase = (completionTime, name, stars, level) => {
    // storeResultsInLocally(completionTime,name,stars, level);
    ;(0,_server_side_accessingData__WEBPACK_IMPORTED_MODULE_0__.storeEachLevelResult)(completionTime, name, level, stars);
}

let disableCharacterFromDisplay = who => {
    let charactersDisplayed = document.querySelector('.characters-display').children;
    Array.from(charactersDisplayed).forEach(character => character.id == who ? character.classList.add('character-found') : false)
}

let moveLevelsAndHeaderDivsToLeft = () => {
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_2__.headerDiv.classList.add('move-left');
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_2__.chooseLevel.classList.add('move-left');
}

let moveLevelsAndHeaderDivsToCenter = () => {
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_2__.headerDiv.classList.remove('move-left');
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_2__.chooseLevel.classList.remove('move-left');
}

let hideScores = () => {
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_2__.scoresContainer.classList.add('scores-hidden');
}

let showScores = () => {
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_2__.scoresContainer.classList.remove('scores-hidden');
}

let show_hideOrShowButton = () => {
    _each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_2__.toggle_text.style.display = 'block';
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
/* harmony export */   "readEachLevelResult": () => (/* binding */ readEachLevelResult),
/* harmony export */   "readCharacterCoordsDataFromFirebase": () => (/* binding */ readCharacterCoordsDataFromFirebase),
/* harmony export */   "readCharacterCoordsDataFromArray": () => (/* binding */ readCharacterCoordsDataFromArray),
/* harmony export */   "testData": () => (/* binding */ testData),
/* harmony export */   "test2": () => (/* binding */ test2),
/* harmony export */   "storeResultsInLocally": () => (/* binding */ storeResultsInLocally)
/* harmony export */ });
/* harmony import */ var _client_side_gamePlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../client_side/gamePlay */ "./src/client_side/gamePlay.js");
/* harmony import */ var _locallyStoredCoordsData_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locallyStoredCoordsData.json */ "./src/server_side/locallyStoredCoordsData.json");
let db = firebase.firestore();



let storeCharacterIntoFirestrore = (characterPos, whichLevel, characterName) => {
    let [x,y] = [...characterPos];
    console.log(x,y,'?!')
    db.collection(whichLevel).doc(characterName).set({X: x, Y: y}).then(()=>console.log(characterName+' coords details saved!!')).catch(err=>console.log("something's wrong!!", err));
}

let storeEachLevelResult = (time, name, level, stars) => {
    db
    .collection('results').doc(level)
    .collection('results').doc(name)
    .set({stars:stars, time:time})
    .then(()=> console.log('result stored!!'))
    .catch(err => console.log("error while storing result!!", err));
}

let readEachLevelResult = (docName, whichCharacter) => {
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

let readCharacterCoordsDataFromArray = (collectionName, docName) => {
    return _locallyStoredCoordsData_json__WEBPACK_IMPORTED_MODULE_1__;
}

let testData = {}
let test2 = {};
let storeResultsInLocally = (time,name,stars, level) => {
    // testData[name] = {time, stars, level}

    // test2[level] = {[name]: {time, stars}}
    // test2[name] = {[level]: {time, stars}}
    test2[name] = {time, stars, level}
}

/***/ }),

/***/ "./src/server_side/level_01/characterPositions.js":
/*!********************************************************!*\
  !*** ./src/server_side/level_01/characterPositions.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateCoords": () => (/* binding */ calculateCoords),
/* harmony export */   "forWaldo": () => (/* binding */ forWaldo),
/* harmony export */   "forOdlaw": () => (/* binding */ forOdlaw),
/* harmony export */   "forWizard": () => (/* binding */ forWizard),
/* harmony export */   "waldosRangeOfX": () => (/* binding */ waldosRangeOfX),
/* harmony export */   "waldosRangeOfY": () => (/* binding */ waldosRangeOfY),
/* harmony export */   "odlawsRangeOfX": () => (/* binding */ odlawsRangeOfX),
/* harmony export */   "odlawsRangeOfY": () => (/* binding */ odlawsRangeOfY),
/* harmony export */   "wizardRangeOfX": () => (/* binding */ wizardRangeOfX),
/* harmony export */   "wizardRangeOfY": () => (/* binding */ wizardRangeOfY)
/* harmony export */ });
/* harmony import */ var _client_side_each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../client_side/each_game_required_divs/requiredDivs */ "./src/client_side/each_game_required_divs/requiredDivs.js");


let waldosRangeOfX = [200, 204];
let waldosRangeOfY = [234, 244];

let wizardRangeOfX = [234, 238];
let wizardRangeOfY = [240, 251];

let odlawsRangeOfX = [99, 103];
let odlawsRangeOfY = [235, 246];

let calculateCoords = () => {
    if(_client_side_each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.levelImage) {
        let waPos = forWaldo();
        // let odPos = forOdlaw();
        // let wiPos = forWizard();
    }
}

let forWaldo = () => {
    let elemRect = _client_side_each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.levelImage.getBoundingClientRect();
    let left = elemRect.left;
    let top = elemRect.top;
    let height = _client_side_each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.levelImage.height;
    let width = _client_side_each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.levelImage.width;
    console.log('l', left, 't', top, 'w', width, 'h', height)
    let yCoordStart = (top+(height*48.2)/100).toFixed(2);
    let yCoordEnd = (top+(height*51.1)/100).toFixed(2);
    let xCoordStart = (left+(width*52.45)/100).toFixed(2);
    let xCoordEnd = (left+(width*54.29)/100).toFixed(2);
    console.log(xCoordStart, xCoordEnd, yCoordStart, yCoordEnd, "<>")
    let rangeOfX = [xCoordStart, xCoordEnd];
    let rangeOfY = [yCoordStart, yCoordEnd];
    return [rangeOfX, rangeOfY];
}

let forOdlaw = () => {
    let elemRect = _client_side_each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.levelImage.getBoundingClientRect();
    let left = elemRect.left;
    let top = elemRect.top;
    let height = _client_side_each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.levelImage.height;
    let width = _client_side_each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.levelImage.width;
    console.log('l', left, 't', top, 'w', width, 'h', height)
    let yCoordStart = (top+(height*47.9)/100).toFixed(2);
    let yCoordEnd = (top+(height*48.9)/100).toFixed(2);
    let xCoordStart = (left+(width*23.25)/100).toFixed(2);
    let xCoordEnd = (left+(width*25.29)/100).toFixed(2);
    console.log(xCoordStart, xCoordEnd, yCoordStart, yCoordEnd, "<>")
    let rangeOfX = [xCoordStart, xCoordEnd];
    let rangeOfY = [yCoordStart, yCoordEnd];
    return [rangeOfX, rangeOfY];
}

let forWizard = () => {
    let elemRect = _client_side_each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.levelImage.getBoundingClientRect();
    let left = elemRect.left;
    let top = elemRect.top;
    let height = _client_side_each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.levelImage.height;
    let width = _client_side_each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.levelImage.width;
    console.log('l', left, 't', top, 'w', width, 'h', height)
    let yCoordStart = (top+(height*47.65)/100).toFixed(2);
    let yCoordEnd = (top+(height*49.1)/100).toFixed(2);
    let xCoordStart = (left+(width*60.45)/100).toFixed(2);
    let xCoordEnd = (left+(width*62.99)/100).toFixed(2);
    console.log(xCoordStart, xCoordEnd, yCoordStart, yCoordEnd, "<>")
    let rangeOfX = [xCoordStart, xCoordEnd];
    let rangeOfY = [yCoordStart, yCoordEnd];
    return [rangeOfX, rangeOfY];
}



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
/* harmony import */ var _accessingData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../accessingData */ "./src/server_side/accessingData.js");
/* harmony import */ var _characterPositions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./characterPositions */ "./src/server_side/level_01/characterPositions.js");



let waldosPosition = () => {
    let pos = (0,_characterPositions__WEBPACK_IMPORTED_MODULE_1__.forWaldo)();
    let [x,y] = [...pos];
    (0,_accessingData__WEBPACK_IMPORTED_MODULE_0__.storeCharacterIntoFirestrore)([x,y], 'level_01', 'waldo');
    // storeCharacterIntoFirestrore([waldosRangeOfX, waldosRangeOfY], 'level_01', 'waldo');
}

let odlawsPosition = () => {
    let pos = (0,_characterPositions__WEBPACK_IMPORTED_MODULE_1__.forOdlaw)();
    let [x,y] = [...pos];
    (0,_accessingData__WEBPACK_IMPORTED_MODULE_0__.storeCharacterIntoFirestrore)([x,y], 'level_01', 'odlaw');
    // storeCharacterIntoFirestrore([odlawsRangeOfX, odlawsRangeOfY], 'level_01', 'odlaw');
}

let wizardsPosition = () => {
    let pos = (0,_characterPositions__WEBPACK_IMPORTED_MODULE_1__.forWizard)();
    let [x,y] = [...pos];
    (0,_accessingData__WEBPACK_IMPORTED_MODULE_0__.storeCharacterIntoFirestrore)([x,y], 'level_01', 'wizard');
    // storeCharacterIntoFirestrore([wizardRangeOfX, wizardRangeOfY], 'level_01', 'wizard');
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
/* harmony export */   "calculateCoords": () => (/* binding */ calculateCoords),
/* harmony export */   "calculateCoordsVer02": () => (/* binding */ calculateCoordsVer02),
/* harmony export */   "waldosRangeOfX": () => (/* binding */ waldosRangeOfX),
/* harmony export */   "waldosRangeOfY": () => (/* binding */ waldosRangeOfY)
/* harmony export */ });
/* harmony import */ var _client_side_each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../client_side/each_game_required_divs/requiredDivs */ "./src/client_side/each_game_required_divs/requiredDivs.js");
// let waldosRangeOfX = [383, 387];
// let waldosRangeOfY = [33, 42];


let xCoordStart, xCoordEnd, yCoordStart, yCoordEnd;

let calculateCoords = () => {
    if(_client_side_each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.levelImage) {
        let elemRect = _client_side_each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.levelImage.getBoundingClientRect();
        let left = elemRect.left;
        // let top = elemRect.top;
        // let top = window.scrollY - elemRect.top;
        let top = elemRect.top - window.scrollY;
        let height = _client_side_each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.levelImage.height;
        let width = _client_side_each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.levelImage.width;
        console.log('l', left, 't', top, 'w', width, 'h', height)
        yCoordStart = (top+(height*35.5)/100).toFixed(2);
        yCoordEnd = (top+(height*37.8)/100).toFixed(2);
        xCoordStart = (left+(width*48.6)/100).toFixed(2);
        xCoordEnd = (left+(width*50.19)/100).toFixed(2);
        console.log(xCoordStart, xCoordEnd, yCoordStart, yCoordEnd, "<>")
        let waldosRangeOfX = [xCoordStart, xCoordEnd];
        let waldosRangeOfY = [yCoordStart, yCoordEnd];
        return [waldosRangeOfX, waldosRangeOfY];
    }
}

let calculateCoordsVer02 = () => {
    let elemRect = _client_side_each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.levelImage.getBoundingClientRect();
    let left = elemRect.left;
    let top = elemRect.top;
    let height = _client_side_each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.levelImage.height;
    let width = _client_side_each_game_required_divs_requiredDivs__WEBPACK_IMPORTED_MODULE_0__.levelImage.width;
    yCoordStart = (top+(height*36)/100).toFixed(2);
    yCoordEnd = (top+(height*37.8)/100).toFixed(2);
    xCoordStart = (left+(width*49)/100).toFixed(2);
    xCoordEnd = (left+(width*50.19)/100).toFixed(2);  
}
// console.log('l', left, 't', top, 'w', width, 'h', height)
// console.log(yCoord, '??', (top+(height*37.8)/100).toFixed(2));
// console.log(xCoord, "!!", (left+(width*50.19)/100).toFixed(2) )
// console.log(xCoordStart, xCoordEnd, yCoordStart, yCoordEnd)

let waldosRangeOfX = [xCoordStart=0, xCoordEnd=0];
let waldosRangeOfY = [yCoordStart=0, yCoordEnd=0];

// let waldosRangeOfX = [186, 189];
// let waldosRangeOfY = [203, 209];



/***/ }),

/***/ "./src/server_side/level_02/storingPositions.js":
/*!******************************************************!*\
  !*** ./src/server_side/level_02/storingPositions.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saving_coords_for_level02": () => (/* binding */ saving_coords_for_level02)
/* harmony export */ });
/* harmony import */ var _client_side_gamePlayLevelWise_characterSelectionDropDown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../client_side/gamePlayLevelWise/characterSelectionDropDown */ "./src/client_side/gamePlayLevelWise/characterSelectionDropDown.js");
/* harmony import */ var _accessingData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessingData */ "./src/server_side/accessingData.js");
/* harmony import */ var _characterPositions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./characterPositions */ "./src/server_side/level_02/characterPositions.js");
// import { storeCharacterIntoFirestrore } from "../accessingData";




let waldosPosition = (level) => {
    let posRange = (0,_characterPositions__WEBPACK_IMPORTED_MODULE_2__.calculateCoords)();
    let [x,y] = [...posRange];
    console.log(x,y, "watwat?!")
    
    // let allCoords = tryingCoordsWithRectVer02();
    // let x = [allCoords[0], allCoords[1]];
    // let y = [allCoords[2], allCoords[3]];
    // console.log([allCoords[0], allCoords[1]],[allCoords[2], allCoords[3]], "watwat?!")
    
    if(x&&y) (0,_accessingData__WEBPACK_IMPORTED_MODULE_1__.storeCharacterIntoFirestrore)([x, y], level, 'waldo');
    // storeCharacterIntoFirestrore([waldosRangeOfX, waldosRangeOfY], level, 'waldo');
    // storeCharacterIntoFirestrore([waldosRangeOfX=x, waldosRangeOfY=y], level, 'waldo');
}

let saving_coords_for_level02 = () => {
    // calculateCoordsVer02();
    waldosPosition('level_02');
}

/***/ }),

/***/ "./src/server_side/locallyStoredCoordsData.json":
/*!******************************************************!*\
  !*** ./src/server_side/locallyStoredCoordsData.json ***!
  \******************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"level_01":{"waldo":{"X":[230,235],"Y":[230,237]},"odlaw":{"X":[115,119],"Y":[232,239]},"wizard":{"X":[268,275],"Y":[230,244]}},"level_02":{"waldo":{"X":[211,218],"Y":[193,200]}}}');

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
/* harmony import */ var _server_side_level_02_storingPositions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server_side/level_02/storingPositions */ "./src/server_side/level_02/storingPositions.js");




// import { coords_for_level_01 } from "./server_side/savingPositions";
// import { coords_for_level_02, saving_coords_for_level02 } from "./server_side/storingDataByLevels";


(0,_client_side_gamePlay__WEBPACK_IMPORTED_MODULE_1__.gamePlay)();
// coords_for_level_01();
// saving_coords_for_level02();
// coords_for_level_02();
(0,_client_side_choose_level_renderLevels__WEBPACK_IMPORTED_MODULE_0__.awaitsUserChooseLevel)();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map