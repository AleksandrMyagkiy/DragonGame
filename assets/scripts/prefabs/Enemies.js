class Enemies extends Phaser.Physics.Arcade.Group {
    constructor(scene) {
        super();
        this.scene = scene;

        this.countMax = 10; // число сколько раз вызывать метод создания противников в уровне
        this.countCreated = 0;

        this.timer = this.scene.time.addEvent({  // создаем стандартный таймер
            delay: 1000,  // каждую секунду
            loop: true, // цикличность постоянная
            callback: this.tick,
            callbackScope: this
        });
    }

    tick() {
        if (this.countCreated < this.countMax) { // добавляем новых врагов пока их количество меньше заданного count
        this.createEnemy();
        } else {
            this.timer.remove(); // в противном случаии удаляем таймер
        }
    }

    createEnemy() {  
        let enemy = this.getFirstDead(); // возвращает первый деактивированный элемент в текущей группе
        
        if (!enemy) { // если такого нет
            console.log('create new enemy');
            enemy = Enemy.generate(this.scene); // создаем противника с генератора случайного противников
            this.add(enemy);  // добавляем врага в группу

        } else { // или же просто пересоздаем
            console.log('reset existing enemy');
            enemy.reset();
        }

        enemy.move(); // отправляем в движение
        ++this.countCreated; // увеличиваем значение в методе 

    }
}