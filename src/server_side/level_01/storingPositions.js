import { storeCharacterIntoFirestrore } from "../accessingData";
import { forOdlaw, forWaldo, forWizard, odlawsRangeOfX, odlawsRangeOfY, waldosRangeOfX, waldosRangeOfY, wizardRangeOfX, wizardRangeOfY } from "./characterPositions";

let waldosPosition = () => {
    let pos = forWaldo();
    let [x,y] = [...pos];
    storeCharacterIntoFirestrore([x,y], 'level_01', 'waldo');
    // storeCharacterIntoFirestrore([waldosRangeOfX, waldosRangeOfY], 'level_01', 'waldo');
}

let odlawsPosition = () => {
    let pos = forOdlaw();
    let [x,y] = [...pos];
    storeCharacterIntoFirestrore([x,y], 'level_01', 'odlaw');
    // storeCharacterIntoFirestrore([odlawsRangeOfX, odlawsRangeOfY], 'level_01', 'odlaw');
}

let wizardsPosition = () => {
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