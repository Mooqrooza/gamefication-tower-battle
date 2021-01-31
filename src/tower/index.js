import './styles.scss';

import floor from './floor';

import { setFirstShowClassToTower } from './script';

const html = `
  <div class="tower">
    <div class="floors">
      ${floor}
      ${floor}
      ${floor}
      ${floor}
      ${floor}
      ${floor}
      ${floor}
      ${floor}
      ${floor}
      ${floor}
      ${floor}
      ${floor}
      ${floor}
      ${floor}
      ${floor}
      ${floor}
      ${floor}
      ${floor}
      ${floor}
      ${floor}
    </div>
  </div>`
.trim();

export { html, setFirstShowClassToTower };
