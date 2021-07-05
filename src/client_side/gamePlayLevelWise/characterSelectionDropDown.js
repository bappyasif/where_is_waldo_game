export let  charactersDD = () => {
    let dropDownMarkUp = document.createElement('select');
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
    return dropDownMarkUp;
}

export let stickDropDownWhereItsClicked = (dropDown, coords) => {
    dropDown.setAttribute('style', 'color: green');
    dropDown.style.marginLeft = coords[0]+'px';
    dropDown.style.top = coords[1]+'px';
    // dropDown.style.zIndex = '-2';
    dropDown.setAttribute('style', 'position: relative');
    // document.querySelector('.game-panel').append(dropDown);
    document.querySelector('#level-image').append(dropDown);
    // if(document.querySelector('.level-image')) {
    //     document.querySelector('.game-panel').append(dropDown);
    // }
}