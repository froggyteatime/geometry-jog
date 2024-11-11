import { HEIGHT, WIDTH } from "../constents";

 export class obstical extends Phaser.GameObjects.Rectangle{
    constructor(scene) {
        super(scene,WIDTH + 100,Phaser.Math.Between(HEIGHT - 32,HEIGHT - 100),32,32,0xff0000);

        this.scene.add.existing(this);

        this.scene.tweens.add({
            targets:this,
            x:(from: WIDTH + 100,to: -100),
            duration: 2000,
            onComplete: () => {
                this.destroy();
            }
        });
    };
 } 