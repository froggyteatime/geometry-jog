
export class player extends Phaser.GameObjects.Rectangle {
    constructor(scene,x,y) {
        super(scene,x,y,32,32,0x800000)

        
        this.setOrigin(0.5);

        this.scene.add.existing(this);

        this.scene.physics.add.existing(this);

        this.body.collideWorldBounds = true;
        this.setScale(1);
    }
}