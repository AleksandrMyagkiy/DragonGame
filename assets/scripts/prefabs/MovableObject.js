class MovableObject extends Phaser.GameObjects.Sprite {
    constructor(data) {
        super(data.scene, data.x, data.y, data.texture, data.frame);
        this.init(data);
    }

    init(data) {
        this.scene.add.existing(this);          // Выводим создаваемый обьект на сцену
        this.scene.physics.add.existing(this);  // добавляем его визический движок
        this.body.enable = true;                // устанавливает физическое тело
        this.velocity = data.velocity; // устанавливает скорость из параметра data
        this.scene.events.on('update', this.update, this); // отслеживаем событие update scene и вызываем на каждом выводе метода update() 
    }

    // метод пересоздания удаленных обьектов
    reset(x, y) {
        // генерируем новые координаты
        this.x = x; 
        this.y = y;
        // и оживляем fire который был уничтожен
        this.setAlive(true);
    }

    isDead() {  // по умолчанию как заглушка из значением false который в дальнейшем будет переопределен
        return false;  
    }

    update() { 
        // проверяем если активный и когда выйдет за пределы установленного екрана в методе (isDead() для каждого обьекта свой)
        if (this.active && this.isDead()) {
            // когда условие сработало - уничтожаем обьект
            this.setAlive(false); 
        }
    }

    // метод уничтожения/возобновления обьекта
    setAlive(status) {
        // активировать/деактивировать физическое тело
        this.body.enable = status;
        // скрыть/показать текстуру
        this.setVisible(status);
        // деактивировать/активировать обьект
        this.setActive(status);
        // если таймер запущен  
        if (this.timer) {
            // то при деактивации обьекта ставим на паузу
            if (!status) {
                this.timer.paused = true;
            // при активации обьекта снимаем таймер с паузы
            } else {
                this.timer.paused = false;
            }
        }
        // при деактивации обьекта запускаем событие 'killed'
        if (!status) {
        this.emit('killed')
        }
    }
    
    move() {  // Метод обработк передвижения fire
        this.body.setVelocityX(this.velocity);
    }

}