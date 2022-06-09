class Player extends Phaser.GameObjects.Sprite {
    constructor(scene) {
        super(scene, 150, config.height / 2, 'dragon', 'dragon1');
        this.init();
    }

    init() {
        this.scene.add.existing(this);          // Выводим плеера на екран
        this.scene.physics.add.existing(this);  // запускаем движек для дракона
        this.body.enable = true;                // обязательно проставляем самому спрайту флаг( body.enable = true )
        this.velocity = 500;
    }

    move() {  // Метод обработк передвижения игрока
        this.body.setVelocity(0); // сбрасываем скорость для каждой анимации, чтобы обькт останавливался при отпускании клавиши

        if (this.scene.cursors.left.isDown) {  // влево
            this.body.setVelocityX(-this.velocity);
        } else if (this.scene.cursors.right.isDown) {  // вправо
            this.body.setVelocityX(this.velocity);
        }
        
        if (this.scene.cursors.up.isDown) {  // вверх
            this.body.setVelocityY(-this.velocity);
        } else if (this.scene.cursors.down.isDown) {  // вниз
            this.body.setVelocityY(this.velocity);
        }

    }
}