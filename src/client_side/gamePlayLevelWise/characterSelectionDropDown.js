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

    // tryingCoords();
    // tryingCoordsWithRect();

    return {
        left: coords[0]-left,
        top: coords[1]-top
    }
}

let tryingCoordsWithRect = () => {
    let elemRect = levelImage.getBoundingClientRect();
    let left = elemRect.left;
    let top = elemRect.top;
    let height = levelImage.height;
    let width = levelImage.width;
    let yCoord = (top+(height*36)/100).toFixed(2);
    let xCoord = (left+(width*49)/100).toFixed(2);
    console.log('l', left, 't', top, 'w', width, 'h', height)
    console.log(yCoord, '??', (top+(height*37.8)/100).toFixed(2));
    console.log(xCoord, "!!", (left+(width*50.19)/100).toFixed(2));
    
}

export let tryingCoordsWithRectVer02 = () => {
    let elemRect = levelImage.getBoundingClientRect();
    let left = elemRect.left;
    // let top = elemRect.top;
    // let top = window.scrollY;
    let top = elemRect.y;
    let height = levelImage.height;
    let width = levelImage.width;
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
    let height = levelImage.height;
    let width = levelImage.width;
    console.log('l', left, 't', top, 'w', width, 'h', height)
    let yCoord = (top+(height*24.2)/100).toFixed(2);
    let xCoord = (left+(width*67.2)/100).toFixed(2);
    console.log(yCoord, '??', (top+(height*25.8)/100).toFixed(2));
    console.log(xCoord, "!!", (left+(width*68)/100).toFixed(2) )
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