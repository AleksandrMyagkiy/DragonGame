class GameScene extends Phaser.Scene {
    constructor() {
        super("Game");
    }

    preload() {
        this.createBackground();
    }

    createBackground() {
        this.add.sprite(0, 0, 'bg').setOrigin(0, 0);
    }
    
}