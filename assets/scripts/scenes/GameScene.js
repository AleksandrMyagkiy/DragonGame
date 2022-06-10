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
        this.enemies = new Enemies(this);
    }

    update() {  // вызывается для обновления постоянно без остановки но только после create()
        this.player.move();
        this.bg.tilePositionX += 0.5;  // бекграунд сам себя дублирует постоянно
    }

    createBackground() {
        this.bg = this.add.tileSprite(0, 0, config.width, config.height, 'bg').setOrigin(0, 0);
    }  
}