
import "./styles/styles.css";
import "./styles/styles.scss";
import "./styles/variables.scss";


import background from './background';
import playerinterface from './playerInterface';
import gameresult from './gameresult';
import * as splash from './splash';

window.onload = () => {
  setTimeout(() => {
    splash.hideAndRemoveSplash();
  }, 3000);
};

document.body.innerHTML = `
  <div id="app">
    ${background}
    ${playerinterface}
    ${splash.html}
  </div>
`;
