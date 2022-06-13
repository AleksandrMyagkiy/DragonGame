class StartScene extends Phaser.Scene {
    constructor() {
        super("Start");
    }
    create(data) {
        this.createBackground();
        if (data.score !== undefined) {
            this.createStats(data);
        }
        this.creatText();
    }

    createStats(data) {
        // получаем переменную graphics для начала рисования вызвав метод graphics()
        const graphics = this.add.graphics();
        graphics.fillStyle(0x000000, 0.5); // определили стиль заливки нашей фигуры
        graphics.fillRoundedRect(config.width / 2 - 200, config.height / 2 - 200, 400, 400); // нарисовали в нужных размерах и в нужном месте
        
        // если  data.completed true - выводим 'Level completed!' если нет - выводим 'Game Over'
        const textTitle = data.completed ? 'Level completed!' : 'Game Over';
        const textScore = `Score: ${data.score}`;
        const textStyle = {
            font: '40px CurseCasual',
            fill: '#ffffff'
        };

        this.add.text(config.width / 2, 250, textTitle, textStyle).setOrigin(0.5);
        this.add.text(config.width / 2, 350, textScore, textStyle).setOrigin(0.5);
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