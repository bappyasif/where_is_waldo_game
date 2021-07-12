// import { storeCharacterIntoFirestrore } from "../accessingData";
import { storeCharacterIntoFirestrore } from "../accessingData";
import { calculateCoords, waldosRangeOfX, waldosRangeOfY } from "./characterPositions";

let waldosPosition = (level) => {
    let posRange = calculateCoords();
    let [x,y] = [...posRange];
    storeCharacterIntoFirestrore([x, y], level, 'waldo');
    // storeCharacterIntoFirestrore([waldosRangeOfX, waldosRangeOfY], level, 'waldo');
}

export let saving_coords_for_level02 = () => {
    waldosPosition('level_02');
}