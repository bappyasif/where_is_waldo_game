import { levelImage } from "./each_game_required_divs/requiredDivs";
import { charactersDD, stickDropDownWhereItsClicked, whichOptionWasSelected } from "./gamePlayLevelWise/characterSelectionDropDown";
import { checkPositionWithFirebaseForGameLevel01 } from "./gamePlayLevelWise/level_01_gamePlay_control";
import { checkPositionWithFirebaseForGameLevel02 } from "./gamePlayLevelWise/level_02_gamePlay_control";

export let gamePlay = () => {
    let worldImage = document.querySelector('.game-panel');
    worldImage.addEventListener('click', checkWhichLevelIsInPlay);
}

export let checkWhichLevelIsInPlay = evt => {
    let x = evt.clientX;
    let y = evt.clientY;

    let imageAltTagText = levelImage.alt;
    let levelID = imageAltTagText.split(' ')[1];
    console.log(levelID);

    if(levelID == '01') {
        checkPositionWithFirebaseForGameLevel01([x,y]);
    } else if(levelID == '02') {
        // dropDown = charactersDD();
        checkPositionWithFirebaseForGameLevel02([x,y]);
    }
}







// export let checkWhichLevelIsInPlay = evt => {
//     let x = evt.clientX;
//     let y = evt.clientY;

//     let imageAltTagText = levelImage.alt;
//     let levelID = imageAltTagText.split(' ')[1];
//     console.log(levelID);
    
//     let dropDown;

//     if(levelID == '01') {
//         // dropDown = charactersDD();
//         // stickDropDownWhereItsClicked(dropDown, [x,y]);
//         // let who = whichOptionWasSelected();
//         // console.log(who, "<><>")
//         // checkPositionWithFirebaseForGameLevel01([x,y], who?who:'waldo');
//         checkPositionWithFirebaseForGameLevel01([x,y])
//         // console.log(evt.pageX, evt.pageY, "here!!", evt.clientX, evt.clientY, dropDown)
        
//         // if(!document.querySelector('select').value) {
//         //     document.querySelectorAll('select').forEach(node=>node.parentNode.removeChild(node));
//         // }

//         // let who = whichOptionWasSelected();
//         // console.log(who, "who")
//         //256, 144 for wizard!!
//         // stickDropDownWhereItsClicked(dropDown, [evt.pageX, evt.pageY])
//     } else if(levelID == '02') {
//         // dropDown = charactersDD();
//         checkPositionWithFirebaseForGameLevel02([x,y]);
//     }
//     // console.log(dropDown, "checks?!", dropDown.options);
// }