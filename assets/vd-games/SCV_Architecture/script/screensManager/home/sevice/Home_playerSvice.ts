import { playerInfo } from "./../../../dataModel/playerDataType";
import { _decorator, Component, Node } from "cc";
import { IPlayerSevice_home } from "../../../interfaces/Home_interfaces";
import { sys } from "cc";
import { LOCAL_STORAGE_KEY_WORD } from "../../../common/Path";
const { ccclass, property } = _decorator;

@ccclass("Home_playerSevice")
export class Home_playerSevice implements IPlayerSevice_home {
  getPlayerID(): number {
    let playerInfo: playerInfo = null;

    playerInfo = JSON.parse(sys.localStorage.getItem(LOCAL_STORAGE_KEY_WORD.PLAYER_INFO));

    return playerInfo.playerID;
  }
}
