import Nivel1 from './escenas/nivel1';
import Carga from './escenas/carga';
import Menu from './escenas/menu';
import HUD from './escenas/hud';

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 800,
    height: 600,
    scene: [Carga,Menu, Nivel1, HUD]
};
export default config;