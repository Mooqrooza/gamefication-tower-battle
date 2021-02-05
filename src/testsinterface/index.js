import './styles.scss';

import questionbutton from './questionbutton';
import answerbutton from './answerbutton';
import usehintbutton from './usehintbutton';
import floorlevel from './floorlevel';

const html = `
  <div class="tests-interface pending-question-type">
    <div class="bottom-gradient"></div>
    ${floorlevel}
    <div class="question-buttons">
      ${questionbutton({ text: "Легкий вопрос", questionDifficulty: "easy" })}
      ${questionbutton({ text: "Средний вопрос", questionDifficulty: "normal" })}
      ${questionbutton({ text: "Сложный вопрос", questionDifficulty: "hard"})}
    </div>
    <div class="question-text">
      <div class="line"></div>
      <div class="line"></div>
      <p>
        Выберите сложность вопроса ...
      </p>
    </div>
    <div class="answers hidden">
      <div class="variants"></div>
      ${usehintbutton()}
    </div>

  </div>
`;

export default html;
