import { levelImage } from "../each_game_required_divs/requiredDivs";
import { checkWhichLevelIsInPlay } from "../gamePlay";
let value = '';

export let  charactersDD = () => {
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

export let stickDropDownWhereItsClicked = (dropDown, coords) => {
    dropDown.setAttribute('style', 'color: green');
    dropDown.style.left = coords[0]+'px';
    dropDown.style.top = coords[1]+'px';
    dropDown.style.position = 'absolute';
    if(dropDown.length > 1) document.querySelector('.game-panel').append(dropDown);
    // dropDown.style.zIndex = '-2';
    // dropDown.setAttribute('style', 'position: absolute');
    // document.querySelector('.game-panel').append(dropDown);
    // document.querySelector('#level-image').append(dropDown);
}

export let whichOptionWasSelected = () => {
    let select = document.querySelector('.found-who');
    
    // console.log(select, "here@@")
    // levelImage.removeEventListener('click', checkWhichLevelIsInPlay);
    // console.log(select.value, "oink oink", evt.target.value, select[])
    // levelImage.addEventListener('click', checkWhichLevelIsInPlay)
    select.addEventListener('change', (evt)=> {
        // console.log('oink oink', evt.target.value);
        // value = evt.target.value;
        value = select.value;
        // console.log(value,"????")
        select.remove();
        return value;
    })
    // let value = select.value;
    // select.remove();
    // return value;
    // console.log(">>>>",value);
}