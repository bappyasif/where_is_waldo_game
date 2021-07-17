// let waldosRangeOfX = [383, 387];
// let waldosRangeOfY = [33, 42];

import { levelImage } from "../../client_side/each_game_required_divs/requiredDivs";
let xCoordStart, xCoordEnd, yCoordStart, yCoordEnd;

export let calculateCoords = () => {
    if(levelImage) {
        let elemRect = levelImage.getBoundingClientRect();
        let left = elemRect.left;
        let top = elemRect.top;
        // let top = window.scrollY - elemRect.top;
        // let top = elemRect.top - window.scrollY;
        let height = levelImage.height;
        let width = levelImage.width;
        console.log('l', left, 't', top, 'w', width, 'h', height)
        yCoordStart = (top+(height*35.5)/100).toFixed(2);
        yCoordEnd = (top+(height*37.8)/100).toFixed(2);
        xCoordStart = (left+(width*48.6)/100).toFixed(2);
        xCoordEnd = (left+(width*50.19)/100).toFixed(2);
        console.log(xCoordStart, xCoordEnd, yCoordStart, yCoordEnd, "<>")
        let waldosRangeOfX = [xCoordStart, xCoordEnd];
        let waldosRangeOfY = [yCoordStart, yCoordEnd];
        return [waldosRangeOfX, waldosRangeOfY];
    }
}

// export let calculateCoordsVer02 = () => {
//     let elemRect = levelImage.getBoundingClientRect();
//     let left = elemRect.left;
//     let top = elemRect.top;
//     let height = levelImage.height;
//     let width = levelImage.width;
//     yCoordStart = (top+(height*36)/100).toFixed(2);
//     yCoordEnd = (top+(height*37.8)/100).toFixed(2);
//     xCoordStart = (left+(width*49)/100).toFixed(2);
//     xCoordEnd = (left+(width*50.19)/100).toFixed(2);  
// }

let waldosRangeOfX = [xCoordStart=0, xCoordEnd=0];
let waldosRangeOfY = [yCoordStart=0, yCoordEnd=0];

export {waldosRangeOfX, waldosRangeOfY}