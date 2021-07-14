import { level, levelImage, level_01, level_02, timer, toggle_text } from "../each_game_required_divs/requiredDivs";

// let renderingLevelWorldImage = (src, alt) => {
//     levelImage.src = src;
//     levelImage.alt = alt;
//     gamePanel.appendChild(levelImage);
// }

let removingLevelAndTimer = () => {
    level.textContent = '';
    timer.textContent = '';
}

let removingLevelWorldImage = () => {
    levelImage.remove();
}

let removeCharactersFromDisplay = () => {
    document.querySelectorAll('.characters-display img').forEach(node=> node.style.display = 'none');
}

let removeOpacityFreomCharcters = () => {
    document.querySelectorAll('.characters-display img').forEach(node=> node.classList.remove('character-found'));
    // document.querySelectorAll('.characters-display img').forEach(node=> node.classList.contains('character-found') ? node.classList.remove('character-found') : false);
}

let hide_showOrHideButton = () => {
    toggle_text.style.display = 'none';
}

let makeOtherLevelsUnclickable = (level) => {
    if(level == '01') {
        level_02.classList.add('unclickable');
        level_01.classList.remove('unclickable');
    } else {
        level_02.classList.remove('unclickable');
        level_01.classList.add('unclickable');
    }
}

export let necessaryCleanUpTasks = (whichLevel) => {
    removingLevelWorldImage();
    removingLevelAndTimer();
    removeCharactersFromDisplay();
    removeOpacityFreomCharcters();
    hide_showOrHideButton();
    makeOtherLevelsUnclickable(whichLevel);
}