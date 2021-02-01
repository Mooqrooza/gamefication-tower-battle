
import "./styles/styles.css";
import "./styles/styles.scss";
import "./styles/variables.scss";
import "./styles/animations.scss";

import { setInitialEvents } from './utils';

import background from './background';
import * as mountains from './mountains';
import playerinterface from './playerInterface';
import testsinterface from './testsinterface';
import gameresult from './gameresult';
import uppergradientoverlay from './uppergradientoverlay';
import bottomgradientoverlay from './bottomgradientoverlay';
import * as tower from './tower';
import * as ground from './ground';
import * as splash from './splash';

window.onload = () => {
  setInitialEvents();
  setTimeout(() => {
    splash.putSplashInLoadingCompleteState();
  }, 1000);
};

document.body.innerHTML = `
  <div id="app">
    ${background}
    ${mountains.html}
    ${tower.html}
    ${bottomgradientoverlay}
    ${uppergradientoverlay}
    <div class="interfaces-box">
      ${playerinterface}
    </div>
    ${ground.html}
    ${splash.html}
  </div>
`;

//${testsinterface}
