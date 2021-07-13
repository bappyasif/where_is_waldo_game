import { levelImage } from "../../client_side/each_game_required_divs/requiredDivs";

let waldosRangeOfX = [200, 204];
let waldosRangeOfY = [234, 244];

let wizardRangeOfX = [234, 238];
let wizardRangeOfY = [240, 251];

let odlawsRangeOfX = [99, 103];
let odlawsRangeOfY = [235, 246];

export let forWaldo = () => {
    let elemRect = levelImage.getBoundingClientRect();
    let left = elemRect.left;
    let top = elemRect.top;
    let height = levelImage.height;
    let width = levelImage.width;
    console.log('l', left, 't', top, 'w', width, 'h', height)
    let yCoordStart = (top+(height*48.2)/100).toFixed(2);
    let yCoordEnd = (top+(height*51.1)/100).toFixed(2);
    let xCoordStart = (left+(width*52.45)/100).toFixed(2);
    let xCoordEnd = (left+(width*54.29)/100).toFixed(2);
    console.log(xCoordStart, xCoordEnd, yCoordStart, yCoordEnd, "<>")
    let rangeOfX = [xCoordStart, xCoordEnd];
    let rangeOfY = [yCoordStart, yCoordEnd];
    return [rangeOfX, rangeOfY];
}

export let forOdlaw = () => {
    let elemRect = levelImage.getBoundingClientRect();
    let left = elemRect.left;
    let top = elemRect.top;
    let height = levelImage.height;
    let width = levelImage.width;
    console.log('l', left, 't', top, 'w', width, 'h', height)
    let yCoordStart = (top+(height*47.9)/100).toFixed(2);
    let yCoordEnd = (top+(height*48.9)/100).toFixed(2);
    let xCoordStart = (left+(width*23.25)/100).toFixed(2);
    let xCoordEnd = (left+(width*25.29)/100).toFixed(2);
    console.log(xCoordStart, xCoordEnd, yCoordStart, yCoordEnd, "<>")
    let rangeOfX = [xCoordStart, xCoordEnd];
    let rangeOfY = [yCoordStart, yCoordEnd];
    return [rangeOfX, rangeOfY];
}

export let forWizard = () => {
    let elemRect = levelImage.getBoundingClientRect();
    let left = elemRect.left;
    let top = elemRect.top;
    let height = levelImage.height;
    let width = levelImage.width;
    console.log('l', left, 't', top, 'w', width, 'h', height)
    let yCoordStart = (top+(height*47.65)/100).toFixed(2);
    let yCoordEnd = (top+(height*49.1)/100).toFixed(2);
    let xCoordStart = (left+(width*60.45)/100).toFixed(2);
    let xCoordEnd = (left+(width*62.99)/100).toFixed(2);
    console.log(xCoordStart, xCoordEnd, yCoordStart, yCoordEnd, "<>")
    let rangeOfX = [xCoordStart, xCoordEnd];
    let rangeOfY = [yCoordStart, yCoordEnd];
    return [rangeOfX, rangeOfY];
}

export {waldosRangeOfX, waldosRangeOfY, odlawsRangeOfX, odlawsRangeOfY, wizardRangeOfX, wizardRangeOfY}