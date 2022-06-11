class Fire extends MovableObject {   // является частью класса MovableObject
    static generate(scene, source) { 
        const data = {
            scene,
            x: source.x + source.width / 2, // получаем координату х дракона и прибавляем половину его ширины для розмещения огня в самую правую сторону
            y: source.y, // передаем по координате у как координату fire
            texture: 'fire',  // текстурой будет ключ который мы установили в прелоадере
            velocity: 750  // скорость установим в 750
        };
        return new Fire(data);
    }

    isDead() {
        return (this.x < -this.width || this.x > config.width + this.width);   // если пуля левее левой и правой стороны экрана
    }
}