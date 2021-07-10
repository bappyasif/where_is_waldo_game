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

export let stickDropDownWhereItsClicked = (dropDown, coords) => {
    dropDown.setAttribute('style', 'color: green');
    dropDown.style.left = coords[0]+'px';
    dropDown.style.top = coords[1]+'px';
    dropDown.style.position = 'absolute';
    if(dropDown.length > 1) document.querySelector('.game-panel').append(dropDown);
    // if(dropDown.length > 1) levelImage.append(dropDown);
    
    // stickItVer02();
}

export let stickItVer05 = () => {
    let elemRect = levelImage.getBoundingClientRect();
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
        top: elemRect.top + scrollTop,
        left: elemRect.left + scrollLeft
    }
}


export let stickItVer04 = evt => {
    return {
        top: evt.pageY,
        left: evt.pageX
    }
}

export let stickItVer03 = (coords) => {
    let pos = stickItVer02();
    let left = pos.left;
    let top = pos.top;
    console.log(left-coords[0], top-coords[1], coords[0]-left, coords[1]-top);
    return {
        left: coords[0]-left,
        top: top-coords[1]
    }
}

export let stickItVer02 = () => {
    let bodyRect = document.body.getBoundingClientRect();
    let elemRect = levelImage.getBoundingClientRect();
    // console.log(bodyRect, elemRect)
    return {
        left: elemRect.left + window.scrollX,
        top: elemRect.top + window.scrollY
    }

    // let topOffset = elemRect.top - bodyRect.top
    // let leftOffset = elemRect.left - bodyRect.left;
    // let rightOffset =  elemRect.right - bodyRect.right;
    // let bottomOffset =  elemRect.bottom - bodyRect.bottom;
    // console.log(topOffset, leftOffset, rightOffset, bottomOffset);
    // console.log(elemRect.scrollLeft, elemRect.scrollTop);
    // console.log(elemRect.left + window.scrollX, elemRect.top + window.scrollY)

    // let crdsTop = levelImage.offsetTop;
    // let crdsLeft = levelImage.offsetLeft;
    // let crdsRight = levelImage.offsetRight;
    // let crdsBottom = levelImage.offsetBottom;

    // let crdsTop = levelImage.scrollTop;
    // let crdsLeft = levelImage.scollLeft;
    // let crdsRight = levelImage.scollRight;
    // let crdsBottom = levelImage.scollBottom;
    // console.log(crdsTop,crdsLeft, crdsRight, crdsBottom);
}

export let whichOptionWasSelected = () => {
    let select = document.querySelector('.found-who');
    select.addEventListener('change', (evt)=> {
        value = select.value;
        select.remove();
        return value;
    });
}