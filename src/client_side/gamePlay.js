import { levelImage } from "./each_game_required_divs/requiredDivs";
import { charactersDD, stickDropDownWhereItsClicked } from "./gamePlayLevelWise/characterSelectionDropDown";
import { checkPositionWithFirebaseForGameLevel01 } from "./gamePlayLevelWise/level_01_gamePlay_control";
import { checkPositionWithFirebaseForGameLevel02 } from "./gamePlayLevelWise/level_02_gamePlay_control";

export let gamePlay = () => {
    let worldImage = document.querySelector('.game-panel');
    worldImage.addEventListener('click', checkWhichLevelIsInPlay);
}

let checkWhichLevelIsInPlay = evt => {
    let x = evt.clientX;
    let y = evt.clientY;

    let imageAltTagText = levelImage.alt;
    let levelID = imageAltTagText.split(' ')[1];
    console.log(levelID);
    
    let dropDown;

    if(levelID == '01') {
        checkPositionWithFirebaseForGameLevel01([x,y])
        dropDown = charactersDD();
        console.log(evt.pageX, evt.pageY, "here!!", dropDown)
        // stickDropDownWhereItsClicked(dropDown, [x,y])
        stickDropDownWhereItsClicked(dropDown, [evt.pageX, evt.pageY])
    } else if(levelID == '02') {
        dropDown = charactersDD();
        checkPositionWithFirebaseForGameLevel02([x,y]);
    }
    // console.log(dropDown, "checks?!", dropDown.options);
}