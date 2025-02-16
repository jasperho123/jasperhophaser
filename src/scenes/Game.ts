import { Scene } from 'phaser';

export class Game extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    msg_text : Phaser.GameObjects.Text;

    constructor ()
    {
        super('Game');
    }

    preload ()
    {
        this.load.image('sky', 'assets/sky.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('bomb', 'assets/bomb.png');
        this.load.spritesheet('dude', 
            'assets/dude.png',
            { frameWidth: 32, frameHeight: 48 }
        );
    }
    platforms: any;
    player: any;
    create ()
    {
        this.add.image(500, 400, 'sky');
        
        this.platforms = this.physics.add.staticGroup();
        
        this.platforms.create(500, 668, 'ground').setScale(2).refreshBody();
        this.platforms.create(700, 500, 'ground');
        this.platforms.create(150, 350, 'ground');
        this.platforms.create(850, 320, 'ground');

        this.player = this.physics.add.sprite(200, 550, 'dude');

        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);
        
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        
        this.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
        });
        
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

    }

    update() 
    {
        
    }
}
