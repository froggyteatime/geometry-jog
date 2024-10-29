//@ts-check
import { GameScene } from './css/scenes/game-scene';
import './css/style.css'
import Phaser from 'phaser';

/**@type{Phaser.Types.Core.GameConfig}*/
const config = {
    width: 600,
    height: 300,
    scale:{
        mode: Phaser.Scale.FIT,
        autoCenter:Phaser.Scale.CENTER_BOTH,
    },
    parent:"app",
    scene:[ GameScene ],
    physics:{
        default:"arcade",
        arcade:{
            gravity:{x:35,y:-95},
            debug:true,
        },
    },
};
const game = new Phaser.Game(config); 
