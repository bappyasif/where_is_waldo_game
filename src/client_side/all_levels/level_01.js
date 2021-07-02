import { gamePanel, level, levelImage, timer, waldo, odlaw, wenda, wilma, wizard } from "../each_game_required_divs/requiredDivs";
import { necessaryCleanUpTasks } from "./neededByAllLevels";
// import img from '../../../dist/images'

// let level = document.querySelector('#level');
// let timer = document.querySelector('#timer');
// let levelImage = document.querySelector('#level-image');
// let gamePanel = document.querySelector('.game-panel');

export let level_one_game_view = () => {
    necessaryCleanUpTasks();

    // removingLevelAndTimer();
    renderingLevelAndTimer('01', '02-00-00');

    // removeCharactersFromDisplay();
    renderCharactersOnDisplay();

    // removingLevelWorldImage();
    renderingLevelWorldImage();
}

let renderingLevelWorldImage = () => {
    levelImage.src = '../../../dist/images/level-1.jpg';
    levelImage.alt = 'level 01';
    gamePanel.appendChild(levelImage);
}

// let removingLevelWorldImage = () => {
//     levelImage.remove();
// }

let renderingLevelAndTimer = (levelNum, levelTimer) => {
    level.textContent = levelNum;
    timer.textContent = levelTimer;
}

// let removingLevelAndTimer = () => {
//     level.textContent = '';
//     timer.textContent = '';
// }

let renderCharactersOnDisplay = () => {
    // waldo.src = '../../../dist/images/Character.Waldo.jpg';
    // waldo.alt = 'waldo';
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

// let removeCharactersFromDisplay = () => {
//     // console.log("here@@", waldo, odlaw, wizard, wilma, wenda)
//     document.querySelectorAll('.characters-display img').forEach(node=>{
//         // console.log(node);
//         // node.src= '';
//         node.style.display = 'none';
//     });
//     // [waldo, odlaw, wizard, wilma, wenda].forEach(node => {
//     //     console.log(node)
//     // });
// }