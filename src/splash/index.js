import { hideAndRemoveSplash, putSplashInLoadingCompleteState } from './script';

import startbutton from './startbutton';

import './styles.scss';

const html = `
  <div class="splash">
    <div class="wrapper">
      <h1>« Башня »</h1>
      <div class="line"></div>
      <p class="info-text">Режим состязания "Башня": <span>Загрузка...</span></p>
      <div class="line"></div>
      <div class="button-and-loader-box">
        ${startbutton({ text: 'Начнем', classIdentifiers: 'hidden'})}
        <div class="loading-indicator"><div></div></div>
      </div>

    </div>

  </div>
`;

export { html, hideAndRemoveSplash, putSplashInLoadingCompleteState };
