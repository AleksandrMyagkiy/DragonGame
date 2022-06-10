class Enemies extends Phaser.Physics.Arcade.Group {
    constructor(scene) {
        super();
        this.scene = scene;
        this.count = 10; // число сколько раз вызывать метод создания противников в уровне
        this.timer = this.scene.time.addEvent({  // создаем стандартный таймер
            delay: 1000,  // каждую секунду
            loop: true, // цикличность постоянная
            callback: this.tick,
            callbackScope: this
        });
    }

    tick() {
        if (this.getLength() < this.count) { // добавляем новых врагов пока их количество меньше заданного count
        this.createEnemy();
        } else {
            this.timer.remove(); // в противном случаии удаляем таймер
        }
    }

    createEnemy() {  
        let enemy = Enemy.generate(this.scene); // вызываем противника с генератора случайного противников
        this.add(enemy);  // добавляем врага в группу
        enemy.move(); // отправляем в движение

    }
}