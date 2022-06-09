class GameScene extends Phaser.Scene {
    constructor() {
        super("Game");
    }

    create() {
        this.createBackground();
        this.player = new Player(this);
    }

    createBackground() {
        this.add.sprite(0, 0, 'bg').setOrigin(0, 0);
    }
    
}