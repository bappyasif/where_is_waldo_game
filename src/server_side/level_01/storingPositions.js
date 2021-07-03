import { storeCharacterIntoFirestrore } from "../accessingData";
import { odlawsRangeOfX, odlawsRangeOfY, waldosRangeOfX, waldosRangeOfY, wizardRangeOfX, wizardRangeOfY } from "./characterPositions";

let waldosPosition = () => {
    storeCharacterIntoFirestrore([waldosRangeOfX, waldosRangeOfY], 'level_01', 'waldo');
}

let odlawsPosition = () => {
    storeCharacterIntoFirestrore([odlawsRangeOfX, odlawsRangeOfY], 'level_01', 'odlaw');
}

let wizardsPosition = () => {
    storeCharacterIntoFirestrore([wizardRangeOfX, wizardRangeOfY], 'level_01', 'wizard');
}

export let coords_for_level_01 = () => {
    waldosPosition();
    odlawsPosition();
    wizardsPosition();
}