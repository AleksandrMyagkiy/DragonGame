class Enemy extends Phaser.GameObjects.Sprite {   // Базовый клас
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        this.init();
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