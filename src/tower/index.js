import './styles.scss';

import towerfloorbottom from './towerfloorbottom';

import towerfloorupper from './towerfloorupper';

const html = `
  <div class="tower">
    <div class="floors">
      ${towerfloorbottom}
      <div class="main">
      </div>
      ${towerfloorupper}
    </div>
  </div>`
.trim();

export default html;
