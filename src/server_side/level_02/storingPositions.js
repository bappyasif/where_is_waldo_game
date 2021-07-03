import { storeCharacterIntoFirestrore } from "../accessingData";

let waldosPosition = (level) => {
    storeCharacterIntoFirestrore([waldosRangeOfX, waldosRangeOfY], level, 'waldo');
}

export let saving_coords_for_level02 = () => {
    waldosPosition('level_02');
}