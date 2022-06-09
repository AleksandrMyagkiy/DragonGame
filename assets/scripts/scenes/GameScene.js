class GameScene extends Phaser.Scene {
    constructor() {
        super("Game");
    }

    init() {  // Для инициализации игровых настроек
        this.cursors = this.input.keyboard.createCursorKeys(); // получаем в переменную cursors - кнопки управления драконом
    }

    create() {  // Создание предзагруженных обьектов
        this.createBackground();
        this.player = new Player(this);
    }

    update() {  // вызывается для обновления постоянно без остановки но только после create()
        this.player.move();
    }

    createBackground() {
        this.add.sprite(0, 0, 'bg').setOrigin(0, 0);
    }
    
}