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

let removeOpacityFreomCharcters = () => {
    document.querySelectorAll('.characters-display img').forEach(node=> node.classList.remove('character-found'));
    // document.querySelectorAll('.characters-display img').forEach(node=> node.classList.contains('character-found') ? node.classList.remove('character-found') : false);
}

export let necessaryCleanUpTasks = () => {
    removingLevelWorldImage();
    removingLevelAndTimer();
    removeCharactersFromDisplay();
    removeOpacityFreomCharcters()   ;
}