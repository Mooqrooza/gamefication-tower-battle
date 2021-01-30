import { hideAndRemoveSplash, putSplashInLoadingCompleteState } from './script';

import mainbutton from '../mainbutton';

import './styles.scss';

const html = `
  <div class="splash">
    <div class="wrapper">
      <h1>« Башня »</h1>
      <div class="line"></div>
      <p class="info-text">Режим состязания "Башня": Загрузка...</p>
      <div class="line"></div>
      <div class="button-and-loader-box">
        ${mainbutton({ text: 'Начнем', classIdentifiers: 'splash-ready-button hidden'})}
        <div class="loading-indicator"><div></div></div>
      </div>

    </div>

  </div>
`;
//

export { html, hideAndRemoveSplash, putSplashInLoadingCompleteState };
