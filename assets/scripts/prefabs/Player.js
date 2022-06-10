class Player extends Enemy {  // является частью класса Enemy
    constructor(scene) {
        super(scene, 150, config.height / 2, 'dragon', 'dragon1');
    }

    init() {   
        super.init();  // вызывает код базового класса Enemy      
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