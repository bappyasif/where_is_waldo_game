import { storeCharacterIntoFirestrore } from "../accessingData";
import { forOdlaw, forWaldo, forWizard, odlawsRangeOfX, odlawsRangeOfY, waldosRangeOfX, waldosRangeOfY, wizardRangeOfX, wizardRangeOfY } from "./characterPositions";

let waldosPosition = () => {
    storeCharacterIntoFirestrore([waldosRangeOfX, waldosRangeOfY], 'level_01', 'waldo');
    let pos = forWaldo();
    let [x,y] = [...pos];
    storeCharacterIntoFirestrore([x,y], 'level_01', 'waldo');
    // storeCharacterIntoFirestrore([waldosRangeOfX, waldosRangeOfY], 'level_01', 'waldo');
}

let odlawsPosition = () => {
    storeCharacterIntoFirestrore([odlawsRangeOfX, odlawsRangeOfY], 'level_01', 'odlaw');
    let pos = forOdlaw();
    let [x,y] = [...pos];
    storeCharacterIntoFirestrore([x,y], 'level_01', 'odlaw');
    // storeCharacterIntoFirestrore([odlawsRangeOfX, odlawsRangeOfY], 'level_01', 'odlaw');
}

let wizardsPosition = () => {
    storeCharacterIntoFirestrore([wizardRangeOfX, wizardRangeOfY], 'level_01', 'wizard');
    let pos = forWizard();
    let [x,y] = [...pos];
    storeCharacterIntoFirestrore([x,y], 'level_01', 'wizard');
    // storeCharacterIntoFirestrore([wizardRangeOfX, wizardRangeOfY], 'level_01', 'wizard');
}

export let coords_for_level_01 = () => {
    waldosPosition();
    odlawsPosition();
    wizardsPosition();
}