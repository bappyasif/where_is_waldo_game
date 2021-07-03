import { awaitsUserChooseLevel } from "./client_side/choose_level/renderLevels";
import { gamePlay } from "./client_side/gamePlay";
import { coords_for_level_01 } from "./server_side/level_01/storingPositions";
// import { coords_for_level_01 } from "./server_side/savingPositions";
import { coords_for_level_02, saving_coords_for_level02 } from "./server_side/storingDataByLevels";

gamePlay();
coords_for_level_01();
// saving_coords_for_level02();
coords_for_level_02();
awaitsUserChooseLevel();