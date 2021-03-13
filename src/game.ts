import 'phaser';
import config from './config';

export class Juego extends Phaser.Game{
    constructor(config: Phaser.Types.Core.GameConfig){
        super(config);
    }
}

// Hasta que no cargue la página, no empieza a crear el juego
window.addEventListener('load', () =>{
    const juego = new Juego(config);
});
