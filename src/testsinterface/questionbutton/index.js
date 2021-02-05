import './styles.scss';
import lines from './lines';

const html = ({ text, questionDifficulty }) => `
  <button class="question-button" data-questiondifficulty="${questionDifficulty}">
    <div class="background"></div>
    <div class="background-progress-indicator">
      <div></div>
    </div>
    <span class="text">${text}</span>
    ${lines}
  </button>
`;

export default html;
