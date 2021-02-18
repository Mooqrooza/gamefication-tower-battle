import './styles.scss';

import heartico from './heartico';
import hintsico from './hintsico';
import scoreico from './scoreico';
import lines from './lines';

const html = ({ classIdentifer, name, scores, lives, hints }) => `
  <div class="player-interface ${classIdentifer}">
    <div class="box">
      <div class="name">${name}</div>
    </div>
    <div class="box main">
      <div class="avatar">
        <div class="img"></div>
      </div>
        <div class="hints">
          ${hintsico}
          <div class="amount-indycator" ></div>
        </div>
        <div class="lives">
          ${heartico}${heartico}
        </div>
        ${lines}
    </div>
    <div class="scores">
      <p><span>000000</span><span></span></p>
    </div>

  </div>
`;

export default html;
