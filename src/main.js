//@ts-check
import { HEIGHT, WIDTH } from './constents';
import { GameScene } from './css/scenes/game-scene';
import './css/style.css'
import Phaser from 'phaser';

/**@type{Phaser.Types.Core.GameConfig}*/
const config = {
    width: WIDTH,
    height: HEIGHT,
    scale:{
        mode: Phaser.Scale.FIT,
        autoCenter:Phaser.Scale.CENTER_BOTH,
    },
    parent:"app",
    scene:[ GameScene ],
    physics:{
        default:"arcade",
        arcade:{
            gravity:{x:0,y:350},
            debug:true,
        },
    },
};
const game = new Phaser.Game(config); 

