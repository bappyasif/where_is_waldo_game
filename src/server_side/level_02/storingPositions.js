// import { storeCharacterIntoFirestrore } from "../accessingData";
import { storeCharacterIntoFirestrore } from "../accessingData";
import { waldosRangeOfX, waldosRangeOfY } from "./characterPositions";

let waldosPosition = (level) => {
    storeCharacterIntoFirestrore([waldosRangeOfX, waldosRangeOfY], level, 'waldo');
}

export let saving_coords_for_level02 = () => {
    waldosPosition('level_02');
}