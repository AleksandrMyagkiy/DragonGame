class Enemy extends Phaser.GameObjects.Sprite {   // Базовый клас
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        this.init();
    }

    static generate(scene) { // генератор случайного противника
        const x = config.width + 200; // по х будет за пределами екрана на 200рх
        const y = Phaser.Math.Between(100, config.height -100); // получаем случайного врага по оси у от 100рх до - 100рх
        const id = Phaser.Math.Between(1, 4); // генерируем случайний id от 1 до 4
        return new Enemy(scene, x, y, 'enemy', `enemy${id}`);

    }

    init() {
        this.scene.add.existing(this);          // Выводим плеера на екран
        this.scene.physics.add.existing(this);  // запускаем движек для дракона
        this.body.enable = true;                // обязательно проставляем самому спрайту флаг( body.enable = true )
        this.velocity = -250;
    }

    move() {  // Метод обработк передвижения игрока
        this.body.setVelocityX(this.velocity);
    }
}