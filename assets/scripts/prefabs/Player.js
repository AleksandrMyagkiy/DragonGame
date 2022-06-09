class Player extends Phaser.GameObjects.Sprite {
    constructor(scene) {
        super(scene, 150, config.height / 2, 'dragon', 'dragon1');
        this.scene.add.existing(this);
    }
}