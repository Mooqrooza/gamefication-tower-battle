
import "./styles/styles.css";
import "./styles/styles.scss";
import "./styles/variables.scss";
import "./styles/animations.scss";

import { setInitialEvents, Game } from './utils';

import background from './background';
import mountains from './mountains';
import cloudsback from './cloudsback';
import cloudsfront from './cloudsfront';
import playerinterface from './playerInterface';
import questionsinterface from './questionsinterface';
import gameresultscreen from './gameresult';
import uppergradientoverlay from './uppergradientoverlay';
import bottomgradientoverlay from './bottomgradientoverlay';
import tower from './tower';
import ground from './ground';
import * as splash from './splash';

window.onload = () => {
  setInitialEvents();
  setTimeout(() => {
    Game.ready();
  }, 100);
};

document.body.innerHTML = `
  <div id="app">
    ${background}
    ${mountains}
    ${cloudsback}
    ${tower}
    ${cloudsfront}
    ${bottomgradientoverlay}
    ${uppergradientoverlay}
    ${ground}
    <div class="interfaces-box">
      <div class="player-interfaces"></div>
      ${questionsinterface}
    </div>
    ${splash.html}
    ${gameresultscreen}
  </div>
`;
