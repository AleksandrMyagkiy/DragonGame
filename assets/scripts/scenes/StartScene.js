class StartScene extends Phaser.Scene {
    constructor() {
        super("Start");
    }
    create() {
        this.createBackground();
        this.creatText();
        this.setEvents();
    }

    createBackground() {
        this.add.sprite(0, 0, 'bg').setOrigin(0, 0);
    }

    creatText() {
        let tapToStart = "Tap to start";
        this.add.text(config.width / 2, 500, tapToStart, {
            font: '40px CurseCasual',
            fill: '#ffffff'
        }).setOrigin(0.5);
    }

    setEvents() { //Переход на игровое поле
        this.input.on('pointerdown', () => {
            this.scene.start('Game');
        })
    }

}