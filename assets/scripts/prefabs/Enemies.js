class Enemies extends Phaser.Physics.Arcade.Group {
    constructor(scene) {
        super(scene.physics.world, scene);
        this.scene = scene;
        this.fires = new Fires(this.scene);
        this.countMax = 10; // число сколько раз вызывать метод создания противников в уровне
        this.countCreated = 0;
        this.countKilled = 0; // счетчик убитых врагов

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

    onEnemyKilled() {
        // при каждом убитом увеличиваем счетчик на 1
        ++this.countKilled;

        // и когда количество убитых будет >= заданному количеству
        if (this.countKilled >= this.countMax) {
            // вызываем метод
            this.scene.events.emit('enemies-killed');
        }
        // 
    }

    createEnemy() {  
        let enemy = this.getFirstDead(); // возвращает первый деактивированный элемент в текущей группе
        
        if (!enemy) { // если такого нет
            enemy = Enemy.generate(this.scene, this.fires); // создаем противника с генератора случайного противников
            enemy.on('killed', this.onEnemyKilled, this);
            this.add(enemy);  // добавляем врага в группу

        } else { // или же просто пересоздаем
            enemy.reset();
        }

        enemy.move(); // отправляем в движение
        ++this.countCreated; // увеличиваем значение в методе 

    }
}