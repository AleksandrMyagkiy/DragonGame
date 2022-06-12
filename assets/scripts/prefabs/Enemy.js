class Enemy extends MovableObject {   // является частью класса MovableObject
    // создаем статический метод
    static generateAttributes() {
        const x = config.width + 200; // по х будет за пределами екрана на 200рх
        const y = Phaser.Math.Between(100, config.height -100); // получаем случайного врага по оси у от 100рх до - 100рх
        return {x, y, frame: `enemy${Phaser.Math.Between(1, 4)}`}; // генерируем случайний id от 1 до 4 и возвращаем в качестве обьекта
    }

    static generate(scene, fires) { // генератор случайного противника
        const data = Enemy.generateAttributes(); // вызываем метод и получаем результата в const data
        return new Enemy({
            scene, 
            fires,
            x: data.x, 
            y: data.y, 
            texture: 'enemy', 
            frame: data.frame,
            velocity: -250,
            bullet: {delay: 1000, texture: 'bullet', velocity: -500},
            origin: {x: 0, y: 0.5} // росположение вылета пули
        });
    }

    init(data) {   
        super.init(data);  // вызывает код базового класса Enemy    
        this.setOrigin(data.origin.x, data.origin.y);  
        this.fires = data.fires || new Fires(this.scene);
        this.timer = this.scene.time.addEvent({  // создаем стандартный таймер
            delay: data.bullet.delay,  // пули каждую секунду 
            loop: true, // цикличность постоянная
            callback: this.fire,
            callbackScope: this
        });
        // добавляем в класс поле bullet для хранения информации о специфике пуль обьектов
        //(скорость, текстура, задержка появления)
        this.bullet = data.bullet; 
    }

    fire() {
        this.fires.createFire(this);
    }

    // метод пересоздания удаленных обьектов
    reset() {
        const data = Enemy.generateAttributes(); // вызываем метод и получаем результата в const data
        // вызываем резет базового класса 
        super.reset(data.x, data.y);
        this.setFrame(data.frame);
    }

    isDead() {
        return this.x < -this.width;  // если враг вылетел левее левой части экрана
    }
}