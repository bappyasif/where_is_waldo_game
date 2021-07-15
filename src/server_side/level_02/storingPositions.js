// import { storeCharacterIntoFirestrore } from "../accessingData";
import { tryingCoordsWithRectVer02 } from "../../client_side/gamePlayLevelWise/characterSelectionDropDown";
import { storeCharacterIntoFirestrore } from "../accessingData";
import { calculateCoords, calculateCoordsVer02, waldosRangeOfX, waldosRangeOfY } from "./characterPositions";

let waldosPosition = (level) => {
    let posRange = calculateCoords();
    let [x,y] = [...posRange];
    console.log(x,y, "watwat?!")
    
    // let allCoords = tryingCoordsWithRectVer02();
    // let x = [allCoords[0], allCoords[1]];
    // let y = [allCoords[2], allCoords[3]];
    // console.log([allCoords[0], allCoords[1]],[allCoords[2], allCoords[3]], "watwat?!")
    
    if(x&&y) storeCharacterIntoFirestrore([x, y], level, 'waldo');
    // storeCharacterIntoFirestrore([waldosRangeOfX, waldosRangeOfY], level, 'waldo');
    // storeCharacterIntoFirestrore([waldosRangeOfX=x, waldosRangeOfY=y], level, 'waldo');
}

export let saving_coords_for_level02 = () => {
    // calculateCoordsVer02();
    waldosPosition('level_02');
}