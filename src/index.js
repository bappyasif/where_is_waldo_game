import { level_one_game_view } from "./client_side/all_levels/level_01";
import { awaitsUserChooseLevel } from "./client_side/choose_level/renderLevels";
import { gamePlay } from "./client_side/gamePlay";
import { waldosPosition, wizardsPosition } from "./server_side/accessingData";
import { coords_for_level_01 } from "./server_side/savingPositions";

gamePlay();
coords_for_level_01()
// level_one_game_view();
awaitsUserChooseLevel();