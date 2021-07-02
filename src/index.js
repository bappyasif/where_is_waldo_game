import { awaitsUserChooseLevel } from "./client_side/choose_level/renderLevels";
import { gamePlay } from "./client_side/gamePlay";
import { coords_for_level_01 } from "./server_side/savingPositions";

gamePlay();
coords_for_level_01()
awaitsUserChooseLevel();