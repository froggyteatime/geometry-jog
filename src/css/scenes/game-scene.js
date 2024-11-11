import Phaser from "phaser";
import { Player } from "../../game-objects/player";
import { HEIGHT, WIDTH } from "../../constents";
import { Generator } from "../../generator";

export class GameScene extends Phaser.Scene{
    constructor(){
        super({ key: "game"});

        this.obsitcle = this.add.group
    }

    preload(){

    }

    create(){
        
        this.cameras.main.setBackgroundColor(0xffb3b3);

        this.generator = new Generator(this);

        this.player = new Player(this, WIDTH / 2, HEIGHT / 2);
    }

    update(){
        this.player.update();
    }
}