class Fires extends Phaser.Physics.Arcade.Group {
    constructor(scene) {
        super(scene.physics.world, scene);
        this.countMax = 10; // число сколько раз вызывать метод создания противников в уровне
        this.countCreated = 0;
    }

    createFire(source) {  
        let fire = this.getFirstDead();

        if (!fire) {
            fire = Fire.generate(this.scene, source);
            this.add(fire);
        } else {
            fire.reset(source.x, source.y);
        }

        fire.move();
    }
}