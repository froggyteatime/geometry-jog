import { Cloud } from "./game-objects/cloud";
import { obstical } from "./game-objects/obsitcle";

export class Generator{
    constructor(scene){
        this.scene = scene;

        this.scene.time.delayedCall(2000,()=>this.init(),undefined,this)
    }

    init(){
        this.generateCloud();
    }

    generateCloud(){
        new Cloud(this.scene);
        this.scene.time.delayedCall(
            Phaser.Math.Between(2000,3000),
            ()=>this.generateCloud(),
            undefined,
            this
        );
    };
    generateObsticle(){
        this.scene.obstical.add(
            new obstical(this.scene),
        );
        
        this.scene.time.delayedCall(
            Phaser.Math.Between(2000,3000),
            ()=>this.generateObsticle(),
            undefined,
            this
        );
    };
    
}