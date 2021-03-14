export default class Menu extends Phaser.Scene {
    private width: number;
    private height: number;

    constructor() {
        super('Menu');
    }

    init() {
        this.width = this.cameras.main.width;
        this.height = this.cameras.main.height;
    }

    create() {
        const logo = this.add.image(this.width / 2, 70, 'logo1');
        const jugarTxt: Phaser.GameObjects.Text = this.add.text(50,this.height/2,'JUGAR',
        {fontSize:'32px',color:'#FFFFFF'}).setInteractive();

        this.cambiarEscena(jugarTxt,'Nivel1');
    }

    /**
     * Cuando se pulse sobre el texto nos va a llevar a la escena indicada
     * @param jugarTxt 
     * @param escena 
     */
    cambiarEscena(jugarTxt: Phaser.GameObjects.Text, escena: string) {
        // Al hacer metodo interactivo, puedo acceder método on
        jugarTxt.on('pointerdown', () =>{
            this.scene.start(escena);
            //Carga la escena HUD, que muestra nº de vidas y puntuación
            this.scene.start('HUD');
            this.scene.bringToTop('HUD');
        })
    }
    
}