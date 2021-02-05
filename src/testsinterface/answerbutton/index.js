import './styles.scss';

import lines from './lines';

const html = ({ text, id = -1 }) => `
  <button class="answer-button" data-id="${id}">
    <div class="background"></div>
    <span class="ico"></span>
    <div class="text">
      <div class="par">
        <div></div>
        <p></p>
      </div>
      <p>${text}</p>
    </div>
    ${lines}
  </button>
`.trim();

export default html;
