
import "./styles/styles.css";
import "./styles/styles.scss";
import "./styles/variables.scss";
import "./styles/animations.scss";

import { setInitialEvents } from './utils';

import background from './background';
import playerinterface from './playerInterface';
import gameresult from './gameresult';
import * as splash from './splash';

window.onload = () => {
  setInitialEvents();
  setTimeout(() => {
    splash.putSplashInLoadingCompleteState();
  }, 3000);
};

document.body.innerHTML = `
  <div id="app">
    ${background}
    ${playerinterface}
    ${splash.html}
  </div>
`;
