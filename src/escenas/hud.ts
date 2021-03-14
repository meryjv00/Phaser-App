export default class HUD extends Phaser.Scene {
    private width: number;
    private height: number;

    private vidasTxt: Phaser.GameObjects.Text;
    private puntuacionTxt: Phaser.GameObjects.Text;

    constructor() {
        super('HUD');
    }

    init() {
        this.width = this.cameras.main.width;
        this.height = this.cameras.main.height;
    }

    create(): void {
        // Crea variable con la escena Nivel 1 con todas sus propiedades
        const nivel1: Phaser.Scene = this.scene.get('Nivel1');

        // Muestra vidas iniciales
        this.vidasTxt = this.add.text(20, 20, 'Vidas: 3', { fontSize: '32px', color: '#FFFFFF' });
        // Actualiza las vidas
        nivel1.events.on('cambiarVidas', this.actualizarVidas, this);

        // Muestra puntuación inicial
        this.puntuacionTxt = this.add.text(this.width - 70, 20, '000', { fontSize: '32px', color: '#FFFFFF' });
        nivel1.events.on('cambiarPuntuacion', this.actualizarPuntuacion, this);
    }

    private actualizarVidas(): void {
        this.vidasTxt.text = "Vidas: " + this.registry.get('vidas');
    }

    private actualizarPuntuacion(): void {
        // Añade todos los 0 que se puedan hasta 3, empezando por el primero
        this.puntuacionTxt.text = Phaser.Utils.String.Pad(this.registry.get('puntuacion'),3,'0',1);
    }
}