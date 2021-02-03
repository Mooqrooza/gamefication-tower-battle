import './styles.scss';

const html = ({ text, classIdentifiers }) => `
  <button class="question-button ${classIdentifiers}">
    <div class="background"></div>
    <div class="background-progress-indicator">
      <div></div>
    </div>
    <div class="timer-indicator">
       Осталось: 00:12
    </div>
    <span class="text">${text}</span>
  </button>
`;

export default html;
