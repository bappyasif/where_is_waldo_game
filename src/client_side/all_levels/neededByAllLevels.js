// let level = document.querySelector('#level');
// let timer = document.querySelector('#timer');
// let levelImage = document.querySelector('#level-image');
// let gamePanel = document.querySelector('.game-panel');

import { level, levelImage, timer } from "../each_game_required_divs/requiredDivs";

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

export let necessaryCleanUpTasks = () => {
    removingLevelWorldImage();
    removingLevelAndTimer();
    removeCharactersFromDisplay();
}
