class StartScene extends Phaser.Scene {
    constructor() {
        super("Start");
    }
    create() {
        this.createBackground();
        this.creatText();
    }

    createBackground() {
        this.add.sprite(0, 0, 'bg').setOrigin(0, 0);
    }

    creatText() {
        this.tapToStart = this.add.text(config.width / 2, 500, "Tap to start", {
            font: '40px CurseCasual',
            fill: '#ffffff'
        }).setOrigin(0.5);
        this.tapToStart.setInteractive();
        this.tapToStart.on('pointerdown', () => {
            this.scene.start('Game');
        });
    }

}