import 'phaser';
import config from './config';

// Hasta que no cargue la página, no empieza a crear el juego
window.addEventListener('load', () =>{
    const game = new Phaser.Game(config);
});
