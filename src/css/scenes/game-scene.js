import Phaser from "phaser";
import { Player } from "../../../game-objects/player";

export class GameScene extends Phaser.Scene{
    constructor(){
        super({ key: "game"});
    }

    preload(){

    }

    create(){
        this.width = this.sys.game.config.width;
        this.height = this.sys.game.config.height;
        this.cameras.main.setBackgroundColor(0xffb3b3);

        this.player = new Player(this, this.width / 2, this.height / 2);
    }

    update(){
        this.player.update();
    }
}