import { gamePanel, level, levelImage, timer } from "../each_game_required_divs/requiredDivs";
import { show_hideOrShowButton } from "../gamePlayLevelWise/requiredByEachLevel";
import { necessaryCleanUpTasks } from "./neededByAllLevels";

export let level_one_game_view = () => {
    necessaryCleanUpTasks();
    renderingLevelAndTimer('01', '02-00-00');
    renderCharactersOnDisplay();
    renderingLevelWorldImage();
    show_hideOrShowButton();
}

let renderingLevelWorldImage = () => {
    // levelImage.src = '../../../dist/images/level-1.jpg' || './images/level-1.jpg';
    levelImage.src = './images/level-1.jpg';
    levelImage.alt = 'level 01';
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
        }
    })
}