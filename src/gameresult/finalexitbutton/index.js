import './styles.scss';

import lines from './lines';

const html = ({ text }) => `
  <button class="final-exit-button hidden">
    <div class="background"></div>
    <span class="text">${text}</span>
    ${lines}
  </button>
`;

export default html;
