import { storeCharacterIntoFirestrore } from "./accessingData";
import { odlawsRangeOfX, odlawsRangeOfY, waldosRangeOfX, waldosRangeOfY, wilmasRangeOfX, wilmasRangeOfY, wizardRangeOfX, wizardRangeOfY } from "./level_02/characterPositions";

let waldosPosition = (level) => {
    storeCharacterIntoFirestrore([waldosRangeOfX, waldosRangeOfY], level, 'waldo');
}

let odlawsPosition = (level) => {
    storeCharacterIntoFirestrore([odlawsRangeOfX, odlawsRangeOfY], level, 'odlaw');
}

let wizardsPosition = (level) => {
    storeCharacterIntoFirestrore([wizardRangeOfX, wizardRangeOfY], level, 'wizard');
}

let wilmasPosition = (level) => {
    storeCharacterIntoFirestrore([wilmasRangeOfX, wilmasRangeOfY], level, 'wilma');
}

export let coords_for_level_02 = () => {
    waldosPosition('level_02');
    // odlawsPosition('level_02');
    // wizardsPosition('level_02');
    // wilmasPosition('level_02');
}