import GridGenerator from './exo1';
import MyMorpionXO from './exo3';
import renderWordMap from '/.exo4';
import btnEnvoyerFormulaire from './exo5';
import numeroTelephone from './exo6';
import notes from './exo7';
// import DrawBar from './exo2';

import './index.scss';

const gridGenerator = new GridGenerator(10, 10);
gridGenerator.run();
// const drawBar = new DrawBar(8, 8);
// drawBar.run();
const gridMorpionXO = new MyMorpionXO(4, 4);
gridMorpionXO.run();

