let config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [BootScene, PreloadScene, StartScene, GameScene],
    physics: {                  // Подключаем физический движок Phaser
        default: 'arcade',
        arcade: {
            debug: false
        }
    }
};

let game = new Phaser.Game(config);