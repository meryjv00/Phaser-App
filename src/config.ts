import Nivel1 from './escenas/nivel1';
import Carga from './escenas/carga';

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 800,
    height: 600,
    scene: [Carga, Nivel1]
};
export default config;