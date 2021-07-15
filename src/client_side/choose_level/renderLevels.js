import { coords_for_level_01 } from "../../server_side/level_01/storingPositions";
import { saving_coords_for_level02 } from "../../server_side/level_02/storingPositions";
import { level_one_game_view } from "../all_levels/level_01";
import { level_two_game_view } from "../all_levels/level_02";
import { level_01, level_02 } from "../each_game_required_divs/requiredDivs"

export let awaitsUserChooseLevel = () => {
    level_01.addEventListener('click',userHasSelectedLevel);
    level_02.addEventListener('click', userHasSelectedLevel);
}

let userHasSelectedLevel = evt => {
    let id = evt.target.id;
    if(id == 'level-01') {
        level_one_game_view();
        // coords_for_level_01();
    } else if(id == 'level-02') {
        level_two_game_view();
        // saving_coords_for_level02();
    }
}