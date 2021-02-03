import './styles.scss';

import heartico from './heartico';
import hintsico from './hintsico';
import scoreico from './scoreico';
import lines from './lines';

const html = `
  <div class="player-interface">
    <div class="box">
      <div class="name">Венецианские фамильяры</div>
    </div>
    <div class="box">
      <div class="avatar">
        <div class="img"></div>
      </div>
        <div class="hints">
          ${hintsico}
          <div class="count-indicator" >
            <div></div>
            <div></div>
          </div>
        </div>
        <div class="lives">
          ${heartico}${heartico}
        </div>
        ${lines}

    </div>
    <div class="score">000000</div>

  </div>
`;

export default html;
