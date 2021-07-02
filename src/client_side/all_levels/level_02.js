import { gamePanel, level, levelImage, timer } from "../each_game_required_divs/requiredDivs";
import { necessaryCleanUpTasks } from "./neededByAllLevels"

export let level_two_game_view = () => {
    necessaryCleanUpTasks();
    renderingLevelAndTimer('02', '01-40-00');
    renderCharactersOnDisplay();
    renderingLevelWorldImage();
}

let renderingLevelWorldImage = () => {
    levelImage.src = '../../../dist/images/level-2.png';
    levelImage.alt = 'level 02';
    gamePanel.appendChild(levelImage);
}

let renderingLevelAndTimer = (levelNum, levelTimer) => {
    level.textContent = levelNum;
    timer.textContent = levelTimer;
}

let renderCharactersOnDisplay = () => {
    document.querySelectorAll('.characters-display img').forEach(node => {
        if(node.id == 'waldo') {
            node.style.display = 'block';
        } else if(node.id == 'odlaw') {
            node.style.display = 'block';
        } else if(node.id == 'wizard') {
            node.style.display = 'block';
        } else if(node.id == 'wilma') {
            node.style.display = 'block';
        }
    })
}