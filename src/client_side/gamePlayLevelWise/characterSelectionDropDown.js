import { levelImage } from "../each_game_required_divs/requiredDivs";

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

export let adjustDropDownPosition = coords => {
    let elemRect = levelImage.getBoundingClientRect();
    let left = elemRect.left;
    let top = elemRect.top;
    // console.log(elemRect.x, elemRect.y, elemRect.height, elemRect.width, levelImage.height, elemRect.height+((levelImage.height*20)/100) );
    // console.log(window.scrollX, window.scrollY)
    console.log(((elemRect.height*20)/100)+elemRect.height, elemRect.height)
    return {
        left: coords[0]-left,
        top: coords[1]-top
    }
}

export let stickDropDownWhereItsClicked = (dropDown, coords) => {
    dropDown.setAttribute('style', 'color: green');
    dropDown.style.left = coords[0]+'px';
    dropDown.style.top = coords[1]+'px';
    dropDown.style.position = 'absolute';
    if(dropDown.length > 1) document.querySelector('.game-panel').append(dropDown);
}

export let whichOptionWasSelected = () => {
    let select = document.querySelector('.found-who');
    select.addEventListener('change', (evt)=> {
        value = select.value;
        select.remove();
        return value;
    });
}