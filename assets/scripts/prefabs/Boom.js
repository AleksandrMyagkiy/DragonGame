class Boom extends Phaser.GameObjects.Sprite {
    static generate(scene, x, y) {
        return new Boom({scene, x, y});
    }

    constructor(data) {
        super(data.scene, data.x, data.y, 'boom', 'boom1');
        this.scene.add.existing(this);          // Выводим создаваемый обьект на сцену

        // Сгенерировать набор фреймов текстурыб необходимых для анимации дракона
        const frames = this.scene.anims.generateFrameNames('boom', {
            prefix: 'boom',
            start: 1, // указываем номер после префикса (в файле - json) первой анимации
            end: 4    // номер после префикса последней анимации
        });

        // Создать новую анимацию на основе полученного набора фреймов
        this.scene.anims.create({
            key: 'boom', // ключ дракону задаем сами
            frames,     // передаем набор фреймов которые сгенерировали шагом ранее (тоже самое что frames: frames)
            frameRate: 10, // число кадров в секунду
            repeat: 0     //будет проиграна 1 раз,  если указать -1 до будет махать крыльями вечно, если указать 10 - то махнет крыльями 10 раз
        });

        // Запустить анимацию
        this.play('boom');

        // отслеживаем событие завершения анимации
        this.once(Phaser.Animations.Events.SPRITE_ANIMATION_COMPLETE, () => {
            // и полностью удаляем анимацию когда она завершится
            this.destroy();
        })

    }

}