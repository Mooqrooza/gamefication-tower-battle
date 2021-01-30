import { hideAndRemoveSplash } from './script';

import './styles.scss';

const html = `
  <div class="splash">
    <div class="wrapper">
      <h1>« Башня »</h1>
      <div class="line"></div>
      <h2>Доберитесь вершины быстрее противника!</h2>
      <div class="line"></div>
      <div class="loading-indicator"><div></div></div>
    </div>
  </div>
`;

export { html, hideAndRemoveSplash };
