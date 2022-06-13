class Player extends Enemy {  // является частью класса Enemy
    constructor(scene) {
        super({
            scene, 
            x: 150, 
            y: config.height / 2, 
            texture: 'dragon', 
            frame: 'dragon1',
            velocity: 500,
            bullet: {delay: 500, texture: 'fire', velocity: 750},
            origin: {x: 1, y: 0.5} //росположение вылета огня 
        });
        
        // Сгенерировать набор фреймов текстурыб необходимых для анимации дракона
        const frames = this.scene.anims.generateFrameNames('dragon', {
            prefix: 'dragon',
            start: 1, // указываем номер после префикса (в файле - json) первой анимации
            end: 6    // номер после префикса последней анимации
        });

        // Создать новую анимацию на основе полученного набора фреймов
        this.scene.anims.create({
            key: 'fly', // ключ дракону задаем сами
            frames,     // передаем набор фреймов которые сгенерировали шагом ранее (тоже самое что frames: frames)
            frameRate: 10, // число кадров в секунду
            repeat: -1     // если указать -1 до будет махать крыльями вечно, если указать 10 - то махнет крыльями 10 раз
        });

        // Запустить анимацию
        this.play('fly');
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