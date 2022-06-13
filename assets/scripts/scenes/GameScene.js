class GameScene extends Phaser.Scene {
    constructor() {
        super("Game");
    }

    init() {  // Для инициализации игровых настроек
        this.cursors = this.input.keyboard.createCursorKeys(); // получаем в переменную cursors - кнопки управления драконом
        this.score = 0; // счетчик убитых вертолетов
    }

    create() {  // Создание предзагруженных обьектов
        this.createBackground();
        if (!this.sounds) {
        this.createSounds();
        }
        this.player = new Player(this);
        this.enemies = new Enemies(this);
        this.createCompleteEvents();
        this.addOverlap();
        this.createText();
    }

    createSounds() {
        this.sounds = {
            boom: this.sound.add('boom', {volume: 0.1}),
            theme: this.sound.add('theme', {volume: 0.2, loop: true})
        }

        this.sounds.theme.play();
    }

    // создаем текст score
    createText() {
        this.scoreText = this.add.text(10, 10, "Score: 0", {
            font: '40px CurseCasual',
            fill: '#ffffff'
        });
    }

    addOverlap() {
        // добавляем в физический движок метод overlap() который позволяет прописать правила столкновений двух обьектов
        //  и проверяем столкновение огней дракона с группой вертолетов(enemies)
        // onOverlap - метод который возникнет при столкновении
        // 4 метод не передаем для этой игры
        // 5 -this в качестве контекста сохранится в методе onOverlap
        this.physics.add.overlap(this.player.fires, this.enemies, this.onOverlap, undefined, this);
        this.physics.add.overlap(this.enemies.fires, this.player, this.onOverlap, undefined, this);
        this.physics.add.overlap(this.player, this.enemies, this.onOverlap, undefined, this);
    }

    // передаем первый обьект и второй обьект (source, target) которые учавствуют в столкновении
    onOverlap(source, target) {
        // проверяем[source, target] на сходство с врагом 'enemy' и возвращаем обьект противника enemy 
        const enemy = [source, target].find(item => item.texture.key === 'enemy');

        // если убитый обьект является врагом(enemy)
        if (enemy) {
            // добавляем в score +1
            ++this.score;
            // и перезаписываем тест
            this.scoreText.setText(`Score: ${this.score}`);
            Boom.generate(this, enemy.x, enemy.y); // вызываем взрыв который происходит в момент столкновения
            this.sounds.boom.play();
        }
        source.setAlive(false); // при попадании удаляем пулю
        target.setAlive(false); // при попадании удаляем вертолет
    }

    createCompleteEvents() {
        // запускаем метод отслеживание когда игрок убит
        this.player.once('killed', this.onComplete, this);
        this.events.once('enemies-killed', this.onComplete, this); // отслеживаем событие update scene и вызываем на каждом выводе метода update() 

    }

    // сам метод отслеживание когда игрок убит
    onComplete() {
        // и когда обьект уничтожен запускаем стартовую страницу
        this.scene.start('Start', {
            // в стартовую страницу передаем:
            score: this.score,
            completed: this.player.active
        });
    }

    update() {  // вызывается для обновления постоянно без остановки но только после create()
        this.player.move();
        this.bg.tilePositionX += 0.5;  // бекграунд сам себя дублирует постоянно
    }

    createBackground() {
        this.bg = this.add.tileSprite(0, 0, config.width, config.height, 'bg').setOrigin(0, 0);
    }  
}