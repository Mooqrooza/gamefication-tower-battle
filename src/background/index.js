import './styles.scss';

import mountains from './mountains';
import clouds from './clouds';

const html = `
  <div class="main-background">
    <div class="gradient"></div>
    ${mountains}
    ${clouds}
  </div>
`;

export default html;
