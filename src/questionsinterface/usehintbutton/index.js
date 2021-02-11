import './styles.scss';

import lines from './lines';

import hintsico from './hintsico';

const html = () => `
  <button class="use-hint-button">
    <div class="background"></div>
    <div class="background-progress-indicator">
      <div></div>
    </div>
    <div class="timer-indicator">
       Осталось: 00:12
    </div>
    <span class="text" >Использовать подсказку</span>
    <div class="ico">${hintsico}</div>
    ${lines}
    <div class="cross-line"></div>
  </button>
`;

export default html;
