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