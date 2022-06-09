class PreloadScene extends Phaser.Scene {
    constructor() {
        super("Preload");
    }

    preload() {
        console.log('preload assets');
    }

    create() {
        console.log('preload assets done');
        this.scene.start('Start');
    }
}