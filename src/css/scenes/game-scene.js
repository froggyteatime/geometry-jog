import Phaser from "phaser";
import { player } from "../../../game-objects/player";

export class GameScene extends Phaser.Scene{
    constructor(){
        super({ key: "game"});
    }

    preload(){

    }

    create(){
        this.width = this.sys.game.config.width;
        this.height = this.sys.game.config.height;
        this.cameras.main.setBackgroundColor(0x97ceeb);

        this.player = new player(this.height/2,this.width/2);
    }
}