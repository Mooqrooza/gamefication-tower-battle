import './styles.scss';

import ground from './ground';
import mountains from './mountains';
import clouds from './clouds';

const html = `
  <div class="main-background">
    <div class="gradient"></div>
    ${ground}
    ${mountains}
    ${clouds}
  </div>
`;

export default html;
